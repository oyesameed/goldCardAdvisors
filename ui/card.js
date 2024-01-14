// Component
export default function Card({image, title, desc, tags}) {

    // Return
    return <li>
        <a href="#" className="group p-2 border rounded-md block overflow-hidden">
            <img
                src={`images/cards/${image}.jpg`}
                alt="Victor Wembanyama Card"
                className="h-[300px] w-full object-cover rounded-md transition duration-200 group-hover:scale-[102%] sm:h-[450px]"
            />

            <div className="relative pl-2 font-sans pt-3">

                {/* Title */}
                <h3 className="text-xl text-dark-1 group-hover:underline group-hover:underline-offset-4">
                    {title}
                </h3>
                
                {/* Description */}
                <p className="mt-2">
                    <span className="sr-only"> Card Description </span>
                    <span className="tracking-wider text-xs antialiased text-dark-2 text-inter"> {desc} </span>
                </p>

                {/* Tags */}
                <div className="flex gap-1 mt-6 mb-2">
                    <span className="flex w-auto gap-2 border rounded-full px-2 py-1">
                        <img src="images/up.svg" className=""/>
                        <p className="font-inter text-xs text-dark-2 antialiased w-auto"> 4% <span className="font-bold px-2"> 7 days </span> </p>
                    </span>

                    <span className="flex w-auto gap-2 border rounded-full px-2 py-1">
                        <img src="images/down.svg" className=""/>
                        <p className="font-inter text-xs text-dark-2 antialiased w-auto"> 10% <span className="font-bold px-2"> 30 days </span> </p>
                    </span>
                </div>
            </div>
        </a>
    </li>

}

