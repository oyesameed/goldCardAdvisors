// Component
export default function Select({ selected, values }) {

    // Return
    return (
        <select
            id="grade"
            className="font-sans text-dark-2 mt-6 border text-xs rounded-full py-1 px-4 appearance-none"
            value={selected}
            onChange={()=>{}}
        >
            {values.map((value, index) => (
                <option key={index} value={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}