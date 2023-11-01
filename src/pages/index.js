import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar page={0} />
      <div className="w-full h-full flex flex-col items-center">
        <div className='w-full h-[50rem] min-h-[75%] bg-[url("/landingbg.jpeg")] bg-no-repeat bg-cover bg-center grow flex flex-col items-center'>
          <div className='text-5xl p-5 text-center mt-[10%] max-w-fit max-h-fit text-clip text-[#2c3e50] landingtitle'>USING AI TO PREVENT OUR WORST ADDICTION</div>
          <Link href='/survey' className="text-3xl p-5 rounded-xl bg-[#2c3e50] text-[#CA8A04] font-semibold mt-5 cursor-pointer">TAKE OUR SURVEY</Link>
        </div>
        <div className='flex flex-col items-center bg-[url("/aboutus.jpeg")] bg-cover bg-center bg-no-repeat'>
          <div className='mt-10 text-5xl text-[#2c3e50] font-semibold'>
            ABOUT US
          </div>
          <div className='mt-5 mb-16 flex justify-between w-full h-[40rem] min-h-[40rem]'>
            <div className='border-r-[6px] border-[#CA8A04] w-[33%] flex flex-col items-center'>
              <div className='text-3xl text-[#2c3e50] landingtitle mt-10 p-2'>CHRISTIAN DIZON</div>
            <div className='text-center text-[#000000] text-xl lg:text-base font-normal mt-20 w-[70%] lightbg'>As a senior in high school, being an engaging member of my community outside of school is something that I truly take pride in. To me, taking these “small steps'' to slowly overcome the opioid epidemic is something that is not just necessary, but is essential to eliminating deaths due to overdose, and addiction within our country. I whole-heartedly believe that RiskReady will allow for change in these communities, and save countless lives around our nation.</div>
            </div>
          <div className='border-r-[6px] border-[#CA8A04] w-[33%] flex flex-col items-center'>
            <div className='text-3xl text-[#2c3e50] landingtitle mt-10 p-2'>RAYED CHOWDHURY</div>
            <div className='text-center text-[#000000] text-xl lg:text-base font-normal mt-20 w-[70%] lightbg'>As a sophomore in high school, I have learned extensively of the dangerous effects behind opioid substance abuse, not only in school, but through the surroundings of my community. Over the past several months, I have heard countless stories of individuals overcoming addiction, some even being exposed to illegally-obtained prescription drugs from their youth. This is a major issue in our society, and it motivated me to use Machine Learning to help prevent it in the future and to provide resources.</div>
          </div>
          <div className='w-[33%] flex flex-col items-center'>
            <div className='text-3xl text-[#2c3e50] landingtitle mt-10 p-2'>BRENNAN DELOS SANTOS</div>
            <div className='text-center text-[#000000] text-xl md:text-base font-normal mt-20 w-[70%] lightbg'>To me, the opioid epidemic is something that really hits home. As only a junior in highschool and coming from a family with a history of smoking and opioid use, I have made it my goal to help others that are also struggling with addiction, and to bring awareness to the epidemic that affects hundreds of thousands. I understand firsthand the effects of this virus that infects our country, and I intend to make a difference through the incorporation of AI and machine learning.</div>
          </div>
          </div>
        </div>
        <div className="mt-10 text-5xl text-[#2c3e50] font-semibold">
          HOW RISKREADY WORKS
        </div>
        <div className="mt-8 text-2xl justify-self-center max-w-[60%] text-center text-[#2c3e50]">RiskReady uses a dataset of hundreds of past Opioid Abuse Reports to train an AI machine learning model to predict risks of opioid and substance abuse given data and survey information. From a dataset of hundreds of Opioid Abuse Reports, we compare survey results and predict an accurate opioid abuse risk out of 4 (1 - Very Low Risk, 4 - Very High Risk), and provide extensive resources and links to areas of risk. Many of these resources that are suggested are from Official NJ organizations, and also websites that list out treatments and rehabilitation help centers nearby the area specific to the user.</div>
        <div className="mt-16 text-5xl text-[#2c3e50] font-semibold">
          OUR GOALS
        </div>
        <div className='mt-4 max-w-[60%] flex flex-col justify-center items-center'>
          <div className='text-5xl text-[#CA8A04] font-semibold self-start'>❝</div>
            <div className='text-3xl text-[#2c3e50] text-center'>At RiskReady, we intend to address the ongoing opioid epidemic that is present not just around the North New Jersey area, but throughout the nation. Through the incorporation of up and coming AI technology along with machine learning, we have put into place a tool that can be utilized by those affected, and provide them with numerous resources to overcome addiction and prevent possible overdose.
            </div>
            <div className='text-5xl text-[#CA8A04] font-semibold self-end mb-16'>❞</div>
        </div>
      </div>
    </div>
  )
}
