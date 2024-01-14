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
import Tile from "@/ui/tile"

// Component
export default function Home({ font }) {

	// Render
	return <Page title="Gold Card Advisors" font={font} >

		{/* Header */}
		<Header/>

        {/* Hero */}
        <section>
            <div className="mx-auto font-sans max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="bg-accent p-8 md:p-12 lg:px-16 lg:py-24">

                        <div className="mx-auto max-w-xl text-left rounded-md">

                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Transforming your Cards into Value
                            </h2>

                            <p className="hidden font-inter text-white/90 sm:mt-4 sm:block">
                                Explore, Track, and Trade – Your Ultimate Resource for Sports Card Values
                                Feel free to customize the title and subtitle to better fit your brand and the specific features you offer on your website.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-2">
                        <img
                            alt="card"
                            src="images/cards/6.jpg"
                            className="h-40 w-full object-cover rounded-md sm:h-56 md:h-full"
                        />

                        <img
                            alt="card"
                            src="images/cards/4.jpg"
                            className="h-40 w-full object-cover rounded-md sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>

		{/* Body */}
		<div className="px-8 gap-y-20 md:gap-0 md:px-8 lg:px-24 mt-8 md:mt-16">

			<div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">

				<div>

                    {/* Hero */}
                    <Hero title="Top trending cards" directory=""/>
                    
                    {/* Description */}
                    <p className="mx-auto text-sm font-inter mt-6 max-w-md leading-relaxed text-dark-2 text-left">
                        Elevate Your Experience with Iconic Collectibles. Discover, Trade, and Dominate the Heroic Universe on Our Exclusive Platform.
                    </p>
                </div>

				{/* Search */}
				<Search/>
			</div>

			{/* Top cards */}
			<div className="my-20">

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

            {/* Card by sport */}
            <div className="flex mt-36 flex-col gap-4 md:gap-0 md:flex-row justify-between">

				<div>

                    {/* Hero */}
                    <Hero title="Cards by sport" directory=""/>
                    
                    {/* Description */}
                    <p className="mx-auto text-sm font-inter mt-6 max-w-md leading-relaxed text-dark-2 text-left">
                        Elevate Your Experience with Iconic Collectibles. Discover, Trade, and Dominate the Heroic Universe on Our Exclusive Platform.
                    </p>
                </div>
                
				{/* Search */}
				<Search/>
			</div>

            {/*  Cards */}
			<div className="mt-20 mb-36">

                {/* Cards */}
                <ul class="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    
                    <Tile image={"1"} title={"Soccer"} trend={"up"} percentage="11" />
                    <Tile image={"2"} title={"Cricket"} trend={"up"} percentage="15" />
                    <Tile image={"3"} title={"Basketball"} trend={"down"} percentage="7" />
                    <Tile image={"4"} title={"Baseball"} trend={"up"} percentage="9" />
                    <Tile image={"5"} title={"American Football"} trend={"down"} percentage="5" />
                    <Tile image={"6"} title={"Tennis"} trend={"up"} percentage="12" />
                    <Tile image={"7"} title={"Volleyball"} trend={"down"} percentage="8" />
                    <Tile image={"8"} title={"Golf"} trend={"up"} percentage="10" />
                    <Tile image={"9"} title={"Hockey"} trend={"down"} percentage="6" />
                    <Tile image={"1"} title={"Rugby"} trend={"up"} percentage="14" />
                    <Tile image={"1"} title={"Soccer"} trend={"down"} percentage="4" />
                    <Tile image={"2"} title={"Cricket"} trend={"up"} percentage="13" />
                    <Tile image={"3"} title={"Basketball"} trend={"down"} percentage="6" />
                    <Tile image={"5"} title={"American Football"} trend={"up"} percentage="11" />
                    <Tile image={"6"} title={"Tennis"} trend={"down"} percentage="7" />
                    <Tile image={"7"} title={"Volleyball"} trend={"up"} percentage="10" />
                    <Tile image={"9"} title={"Hockey"} trend={"down"} percentage="5" />
                    <Tile image={"1"} title={"Rugby"} trend={"up"} percentage="12" />


				</ul>
            </div>

		</div>

		<Footer/>
	</Page>
}
 