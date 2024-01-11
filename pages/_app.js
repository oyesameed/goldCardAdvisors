import "@/styles/globals.css"

// To include proper fonts
import { Noto_Sans } from "next/font/google";

// Setup Noto font
const Noto = Noto_Sans({  

	weight: ["400", "500"],
	style: ["normal", "italic"],
	subsets: ['latin'],
	variable: '--font-noto'

})

export default function App({ Component, pageProps }) {

  return <Component {...pageProps} font={`${ Noto.variable }`} />
  
}
