// Head
import Head from "next/head"

// Component
export default function Page({ children, title, font }) {

    return <div className={`absolute bg-light-1 w-full overflow-x-hidden overflow-y-auto ${font} `}>

        {/* Render page title */}
        {/* <Head><title>{ `${title ? title + " / " : "" }Grandeur` }</title></Head> */}
        <Head><title>{title + "– Heuristiks"}</title></Head>
                
        {/* Append page of the content */}
        {children}

    </div>

}