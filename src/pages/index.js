import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar page={0} />
      <div className="w-full h-full flex flex-col items-center">
        <div className='w-full h-[50rem] min-h-[75%] bg-[url("/landingbg.jpeg")] bg-no-repeat bg-cover bg-center grow'>
          <div className='text-5xl p-5 ml-[5%] mt-[10%] max-w-fit max-h-fit text-clip text-[#2c3e50] landingtitle'>USING AI TO PREVENT OUR WORST ADDICTION</div>
        </div>
        <div className='flex flex-col items-center bg-[url("/aboutus.jpeg")] bg-cover bg-center bg-no-repeat'>
          <div className='mt-10 text-5xl text-[#2c3e50] font-semibold'>
            ABOUT US
          </div>
          <div className='mt-5 mb-16 flex justify-between w-full h-[40rem] min-h-[40rem]'>
            <div className='border-r-2 border-[#CA8A04] w-[33%] flex flex-col items-center'>
              <div className='text-3xl text-[#2c3e50] landingtitle mt-10 p-2'>CHRISTIAN DIZON</div>
            <div className='text-center text-[#000000] text-xl font-normal mt-20 w-[70%] lightbg'>As a senior in high school, being an engaging member of my community outside of school is something that I truly take pride in. To me, taking these “small steps'' to slowly overcome the opioid epidemic is something that is not just necessary, but is essential to eliminating deaths due to overdose, and addiction within our country. I whole-heartedly believe that RiskReady will allow for change in these communities, and save countless lives around our nation.</div>
            </div>
          <div className='border-r-2 border-[#CA8A04] w-[33%] flex flex-col items-center'>
            <div className='text-3xl text-[#2c3e50] landingtitle mt-10 p-2'>RAYED CHOWDHURY</div>
            <div className='text-center text-[#000000] text-xl font-normal mt-20 w-[70%] lightbg'>As a sophomore in high school, I have learned extensively of the dangerous effects behind opioid substance abuse, not only in school, but through the surroundings of my community. Over the past several months, I have heard countless stories of individuals overcoming addiction, some even being exposed to illegally-obtained prescription drugs from their youth. This is a major issue in our society, and it motivated me to use Machine Learning to help prevent it in the future and to provide resources.</div>
          </div>
          <div className='border-r-2 border-[#CA8A04] w-[33%] flex flex-col items-center'>
            <div className='text-3xl text-[#2c3e50] landingtitle mt-10 p-2'>BRENNAN DELOS SANTOS</div>
            <div className='text-center text-[#000000] text-xl font-normal mt-20 w-[70%] lightbg'>To me, the opioid epidemic is something that really hits home. As only a junior in highschool and coming from a family with a history of smoking and opioid use, I have made it my goal to help others that are also struggling with addiction, and to bring awareness to the epidemic that affects hundreds of thousands. I understand firsthand the effects of this virus that infects our country, and I intend to make a difference through the incorporation of AI and machine learning.</div>
          </div>
          </div>
        </div>
        <div className="mt-10 text-5xl text-[#2c3e50] font-semibold">
          OUR MOTIVES
        </div>
      </div>
    </div>
  )
}
