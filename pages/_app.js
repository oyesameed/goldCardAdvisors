import "@/styles/globals.css"

// To include proper fonts
import { DM_Sans, Inter } from "next/font/google";

// Setup Sans font
const SansFont = DM_Sans({  

	weight: ["400", "500"],
	style: ["normal", "italic"],
	subsets: ['latin'],
	variable: '--font-sans'

})

// Setup Inter font
const InterFont = Inter({  

	weight: ["400", "500"],
	style: ["normal"],
	subsets: ['latin'],
	variable: '--font-inter'

})


export default function App({ Component, pageProps }) {

  return <Component {...pageProps} font={`${ SansFont.variable } ${ InterFont.variable } `} />
  
}
