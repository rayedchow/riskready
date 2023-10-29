import Link from "next/link";

const Navbar = (props) => {
	return (
		<div className="bg-[#D2DCE7] h-[10%] w-full flex justify-between items-center border-b-[1px] border-[#000000]">
			<Link href='/' className="text-3xl text-[#CA8A04] font-semibold ml-16">RISKREADY</Link>
			<div className="flex justify-around w-[40%] mr-16">
				<Link href='/' className={`text-2xl ${props.page==0 ? 'text-[#0C4A6E] font-semibold' : 'text-[#CA8A04] font-regular'}`}>ABOUT US</Link>
				<Link href='/survey' className={`text-2xl ${props.page==1 ? 'text-[#0C4A6E] font-semibold' : 'text-[#CA8A04] font-regular'}`}>SURVEY</Link>
				<Link href='/resources' className={`text-2xl ${props.page==2 ? 'text-[#0C4A6E] font-semibold' : 'text-[#CA8A04] font-regular'}`}>RESOURCES</Link>
			</div>
		</div>
	)
}

export default Navbar;