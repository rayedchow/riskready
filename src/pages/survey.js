import { useState } from 'react';
import Navbar from '../components/Navbar';
import questions from '../data/questions.json';
import scorecards from '../data/scorecards.json';
import Select from 'react-select';
import axios from 'axios';
import { ThreeBody } from '@uiball/loaders';

export default function Survey() {
  const [selectedData, setSelectedData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleChange = (questionID, selectedOption) => {
    const tempSelected = {...selectedData};
    tempSelected[questions[questionID]['id']] = [selectedOption.value];
    setSelectedData({...tempSelected});
  }

  const ageChange = (e) => {
    setSelectedData({...selectedData, 'Age': [parseInt(e.target.value)]});
  }

  const onSubmit = () => {
    if(Object.keys(selectedData).length < 14) return;
    console.log(selectedData);
    setSubmitted(true);
    axios.post('http://vamp.pythonanywhere.com/', selectedData)
      .then(res => {
        console.log(res.data);
        setTimeout(() => setScore(res.data.predictedRisk), 3000);
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="w-full h-full">
      <Navbar page={1} />
      <div className="flex flex-col items-center mt-10">
        <div className="text-3xl text-[#0C4A6E] font-medium italic">
          Predicting Opioid/Substance Abuse Risk
        </div>
        <div className="text-lg text-[#000000] text-center font-light w-[60%] mt-3">
          We will use a sophisticated AI Algorithm to predict the risk of Opioid and Substance Abuse using data inputted using this survey!<br/>Please answer the questions as accurately as possible.<br/>If you are not comfortable answering a question, use the “Rather not say” option if possible.
        </div>
        <div className="w-3/5 min-h-[10rem] flex flex-col justify-around items-center bg-[#D2DCE7] drop-shadow-2xl rounded-xl mt-8 mb-36">
          
          {!submitted ? <>
            {questions.map((question, i) => (
              <div className='flex flex-col mt-5 mb-5' key={`question-${i}`}>
                <div className='text-xl text-[#0C4A6E] font-semibold text-center max-w-[75%] self-center'>{i+1}. {question['q']}</div>
                {question['options'] ?
                  <div className='self-center relative' style={{zIndex: (14-i)*50}}>
                    <Select
                      className='self-center drop-shadow-lg mt-2'
                      options={question['options']}
                      onChange={(s) => handleChange(i, s)}
                      isSearchable
                    />
                  </div>
                  :
                  <input type="number" onChange={ageChange} className='self-center w-16 p-2 rounded-md drop-shadow-lg mt-2' />
                }
              </div>
            ))}
            <div className='mt-5 mb-16 p-3 bg-[#0C4A6E] text-[#CA8A04] text-xl font-semibold drop-shadow-xl rounded-xl hover:cursor-pointer' onClick={onSubmit}>
              SUBMIT
            </div></>
            :
              <>
              {score ? 
              <>
                <div className="self-start m-10 flex flex-col">
                  <div className="flex items-center">
                    <div className={`px-7 py-4 w-32 h-32 rounded-[50%] border-[12px] border-[${scorecards[score-1]['color']}] flex justify-center items-center`}>
                      <div className="text-[#0C4A6E] text-7xl text-semibold">{score}</div>
                    </div>
                    <div className="ml-6 text-[#0C4A6E] text-4xl text-semibold">{scorecards[score-1]['title']}</div>
                  </div>
                  <div className="mt-8 flex flex-col">
                    <div className="text-2xl text-[#0C4A6E] font-semibold">What this means</div>
                    <div className="text-xl text-[#000000] font-light">
                      {scorecards[score-1]['Meaning'].map((line) => (
                        <>{line}<br/></>
                      ))}
                    </div>
                    <div className="mt-8 text-2xl text-[#0C4A6E] font-semibold">How to prevent Opioid Substance Abuse</div>
                    <div className="text-xl text-[#000000] font-light">
                      {scorecards[score-1]['Prevention'].map((line) => (
                        <>{line}<br/></>
                      ))}
                    </div>
                    <div className="mt-8 text-2xl text-[#0C4A6E] font-semibold">Resources specific for your risks</div>
                    <div className="text-xl text-[#000000] font-light">
                      {scorecards[score-1]['Resources'].map((line) => (
                        <>{line}<br/></>
                      ))}
                    </div>
                  </div>
                </div>
              </>
              :
                <div className="h-96 w-full flex justify-center items-center">
                  <ThreeBody
                    size={80}
                    speed={1}
                    color="#CA8A04"
                  />
                </div>
              }
              </>
          }
        </div>
      </div>
    </div>
  )
}
