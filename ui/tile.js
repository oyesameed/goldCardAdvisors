// Component
export default function Tile({image, title, trend, percentage}) {

    // Return
    return <div class="flex items-stretch gap-4">

        {/* Image */}
        <img
            src={`images/sports/${image}.jpg`}
            alt=""
            class="aspect-square w-20 rounded-lg object-cover"
        />

        {/* Data */}
        <div>

            {/* Title */}
            <h3 class="text-lg/tight font-medium font-sans text-dark-1">{title}</h3>

            {/* Trend */}
            <span className={`mt-1 ${trend ? 'inline' : ''} flex items-center w-16 justify-center rounded-full px-3 py-0.5 ${trend === 'up' ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-900'}`}>
                <img src={`images/${trend === 'up' ? 'up' : 'down'}.svg`} className="-ms-1 me-1.5 h-2.5 w-2.5" alt={`${trend === 'up' ? 'Up' : 'Down'} Arrow`} />
                <p className="whitespace-nowrap text-xs font-inter">{percentage}%</p>
            </span>
             
        </div>
    </div>

}

