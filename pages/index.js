// Libraries
import Chart from "@/ui/chart"
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
		<div className="px-8 md:px-12 lg:px-32 mt-16">

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

			<div className="flex gap-10 mt-20">
				
				<div className="w-full lg:w-2/3">

					{/* Infos */}
					<div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
						<Info value="96,650.23" title="Base index"/>
						<Info value="669,8" title="Cards in database"/>
						<Info value="640" title="Tracked cards"/>
						<Info value="179,1" title="Total sales"/>
					</div>

					{/* Graph */}
					<div className="mt-10 px-10 py-6 bg-light-2 w-full h-96 border rounded-md">
						
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
				<div className="w-full lg:w-1/3 items-end flex flex-col justify-between gap-4">
					<img src="images/cards/1.jpg" className="w-72 h-auto"/>
					<a className="inline-block text-center font-sans w-72 rounded border border-accent bg-accent px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-accent focus:outline-none focus:ring active:text-accent" href="/">Get card</a>
				</div>
			</div>

		</div>
	</Page>
}
 