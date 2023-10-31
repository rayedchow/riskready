import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar page={0} />
      <div className="w-full h-full flex flex-col items-center">
        <div className='w-full h-[50rem] min-h-[75%] bg-landingbg bg-no-repeat bg-cover bg-center grow'>
          <div className='text-5xl p-5 ml-[5%] mt-[10%] max-w-fit max-h-fit text-clip text-[#2c3e50] landingtitle'>USING AI TO PREVENT OUR WORST ADDICTION</div>
        </div>
        <div className='mt-10 text-5xl text-[#2c3e50] font-semibold'>
          ABOUT US
        </div>
        <div className='mt-5 mb-16 flex justify-between w-full h-[40rem] min-h-[40rem]'>
          <div className='border-r-2 border-[#CA8A04] w-[33%] flex flex-col items-center'>
            <div className='text-3xl text-[#2c3e50] landingtitle mt-10'>CHRISTIAN DIZON</div>
          </div>
          <div className='border-r-2 border-[#CA8A04] w-[33%] flex flex-col items-center'>
            <div className='text-3xl text-[#2c3e50] landingtitle mt-10'>RAYED CHOWDHURY</div>
            <div className='text-center text-[#2c3e50] text-2xl font-normal mt-28 w-[70%]'>As a sophomore in high school, I have learned extensively of the dangerous effects behind opioid substance abuse, not only in school, but through the surroundings of my community. This is a major issue in our society, and it motivated me to use Machine Learning to help prevent it in the future and to provide resources.</div>
          </div>
          <div className='border-r-2 border-[#CA8A04] w-[33%] flex flex-col items-center'>
            <div className='text-3xl text-[#2c3e50] landingtitle mt-10'>BRENNAN DELOS SANTOS</div>
            <div className='text-center text-[#2c3e50] text-2xl font-normal mt-28 w-[70%]'>Coming from a family with a history of smoking and opioid use, I have made it one of my goals to help others that are also struggling or have family struggling with opioid use and addiction.</div>
          </div>
        </div>
        <div className="mt-10 text-5xl text-[#2c3e50] font-semibold">
          OUR MOTIVES
        </div>
      </div>
    </div>
  )
}
