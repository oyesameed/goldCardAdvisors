// Component
export default function Hero({ title, directory }) {

    // Return
    return <div className="flex flex-col gap-2">

        {/* Title */}
        <h1 className="font-sans text-2xl font-medium text-dark-1">{title}</h1>

        {/* Directory */}
        <p className="font-inter text-xs text-dark-2 antialiased">{directory}</p>
    </div>

}