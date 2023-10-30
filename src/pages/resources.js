import Navbar from '../components/Navbar';

const resources = [
  {name: "Opioid Abuse Harm Reduction - SAFEProject", link: "https://www.safeproject.us/resource/the-truth-about-harm-reduction/"},
  {name: "Opioid Overdose Witness Training - SAFEProject", link: "https://www.safeproject.us/article/what-to-do-if-you-witness-an-overdose/"},
  {name: "Harm Reduction Resources Near You", link: "https://harmreduction.org/resource-center/harm-reduction-near-you/"},
  {name: "Fentanyl Test Strips Resource", link: "https://www.healthaffairs.org/content/forefront/fentanyl-test-strips-empower-people-and-save-lives-so-why-aren-t-they-more-widespread"},
  {name: "CDC Opioid Abuse Help & Resources", link: "https://www.cdc.gov/opioids/overdoseprevention/help-resources.html"},
  {name: "Local Health Centers for substance abuse services", link: "https://bphc.hrsa.gov/"},
  {name: "Managing Chronic Pain", link: "https://store.samhsa.gov/product/TIP-54-Managing-Chronic-Pain-in-Adults-With-or-in-Recovery-From-Substance-Use-Disorders/SMA13-4671"},
  {name: "Mental Health/Addiction Help", link: "https://www.hhs.gov/programs/health-insurance/mental-health-substance-use-insurance-help/index.html"},
  {name: "NJ Substance Abuse Prevention Regional Coalition Agency", link: "https://www.nj.gov/humanservices/dmhas/resources/services/prevention/Regional_Coalition_Contacts.pdf"},
  {name: "Substance Abuse/Addiction Treatment in NJ", link: "https://northjerseyrecovery.com/ppc/drug-addiction-treatment"},
  {name: "SAMHSA National Opioid Abuse Helpline", link: "https://www.samhsa.gov/find-help/national-helpline"}
]

export default function Resources() {
  return (
    <div className="w-full h-full">
      <Navbar page={2} />
      <div className="flex flex-col items-center mt-10">
        <div className="text-4xl text-[#0C4A6E] font-semibold">
          Resources for Opioid Abuse Treatment & Prevention
        </div>
        <div className="flex flex-col gap-1 mt-5 items-center">
          {resources.map((src) => (
            <><a target='_blank' rel='noopener noreferrer' href={src['link']} className='text-[#0984e3] text-xl font-regular'>{src['name']}</a><br/></>
          ))}
        </div>
      </div>
    </div>
  )
}
