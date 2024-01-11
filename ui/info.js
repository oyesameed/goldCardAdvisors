// Component
export default function Info({ title, value }) {

    // Return
    return <div className="flex flex-col gap-1">
    
        {/* Value */}
        <h1 className="font-sans text-2xl font-medium text-dark-1">{value}</h1>

        {/* Title */}
        <span className="flex gap-2">
            <p className="font-inter text-xs text-dark-2 antialiased">{title}</p>
            <img src="images/info.svg" className=""/>
        </span>
        
    </div>
}