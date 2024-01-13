// Component
export default function Card({image, title, desc, tags}) {

    // Return
    return <div className="w-72 mt-10 border rounded-md p-3 flex flex-col h-full gap-4">
    
        {/* Image */}
        <img src={`images/cards/${image}.jpg`} className="w-auto"/>
    
        {/* Data */}
        <div className="ml-2">
    
            <div className="flex flex-col gap-2">
    
                {/* Title */}
                <h1 className="font-sans text-xl font-medium text-dark-1">{title}</h1>
    
                {/* Subtitle */}
                <p className="font-inter text-xs text-dark-2 antialiased">{desc}</p>
            </div>
    
            {/* Tags */}
            <div className="flex gap-1 mt-6">
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
    </div>

}

