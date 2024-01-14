// Libraries
import Card from "@/ui/card"
import Chart from "@/ui/chart"
import Footer from "@/ui/footer"
import Header from "@/ui/header"
import Hero from "@/ui/hero"
import Info from "@/ui/info"
import Page from "@/ui/page"
import Search from "@/ui/search"
import Select from "@/ui/select"

// Component
export default function Home({ font }) {

	// Render
	return <Page title="Gold Card Advisors" font={font} >

		{/* Header */}
		<Header/>

		{/* Body */}
		<div className="px-8 gap-y-20 md:gap-0 md:px-8 lg:px-24 mt-8 md:mt-16">

			<div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">

				{/* Hero */}
				<Hero title="Victor Wembanyama" directory="All Cards / Basketball / Victor Wembanyama / 2023 Prizm Draft Picks"/>
				
				{/* Search */}
				<Search/>
			</div>
			
			{/* Categories */}
			<div className="flex gap-2">
				<Select selected="PSA9" values={["PSA10", "PSA9", "RAW"]} />
				<Select selected="Autographs" values={["Base", "Raw"]} />
			</div>

			{/* Data section */}
			<div className="w-full flex flex-col-reverse md:flex-row gap-10 mt-20">
				
				<div className="sm:w-full md:w-2/3">

					{/* Infos */}
					<div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
						<Info value="96,650.23" title="Base index"/>
						<Info value="669,8" title="Cards in database"/>
						<Info value="640" title="Tracked cards"/>
						<Info value="179,1" title="Total sales"/>
					</div>

					{/* Graph */}
					<div className="mt-10 h-auto px-6 lg:px-10 py-2 lg:py-6 bg-light-2 w-full h-96 border rounded-md">
						
						{/* Info */}
						<div className="flex flex-col gap-1">

							{/* Value */}
							<h1 className="font-sans text-base font-medium text-dark-1">Prices overview</h1>

							{/* Title */}
							<span className="flex gap-2">
								<img src="images/up.svg" className=""/>
								<p className="font-inter text-xs text-dark-2 antialiased">4% more in 2023</p>
							</span>
							
						</div>

						{/* Chart */}
						<div className="mt-4">
							 <Chart/> 
						</div>

					</div>
				</div>

				{/* Card */}
				<div className="w-full md:w-1/3 md:pl-10 lg:pl-20 flex flex-col items-center md:items-end">
					<div className="w-64 lg:w-72 flex flex-col justify-end lg:justify-between h-full gap-4">
						<img src="images/cards/1.jpg" className="w-auto"/>
						<a className="inline-block w-full text-center font-sans rounded border border-accent bg-accent px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-accent focus:outline-none focus:ring active:text-accent" href="/">Get card</a>
					</div>
				</div>
			</div>

			{/* Top cards */}
			<div className="my-36">
				
				{/* Hero */}
				<Hero title="Top cards" directory=""/>

				{/* Cards */}
				<ul class="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					
					<Card title={"Victor Wembanyama"} desc={"2023 Hoops Ignition"} image={"1"}/>
					<Card title={"Cristiano Ronaldo"} desc={"Ultimate Striker Edition"} image={"2"}/>
					<Card title={"Serena Williams"} desc={"Grand Slam Champion Series"} image={"3"}/>
					<Card title={"LeBron James"} desc={"King's Court Exclusive"} image={"4"}/>
					<Card title={"Magnus Carlsen"} desc={"Strategic Brilliance"} image={"5"}/>
					<Card title={"Neymar Jr."} desc={"Goal-Getter Series"} image={"6"}/>
					<Card title={"Victor Wembanyama"} desc={"2023 Hoops Ignition"} image={"7"}/>
					<Card title={"LeBron James"} desc={"King's Court Exclusive"} image={"1"}/>
					
				</ul>
			</div>


		</div>

		<Footer/>
	</Page>
}
 