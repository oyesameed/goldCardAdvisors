import Link from "next/link";

// Component
export default function Footer() {

    // Return
    return (
        <footer className="font-inter border-t">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
            <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
                className="inline-block rounded-full bg-accent bg-opacity-100 p-2 text-white shadow transition hover:bg-opacity-90 sm:p-3 lg:p-4"
                href="#header"
            >
                <span className="sr-only">Back to top</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                />
                </svg>
            </a>
            </div>

            <div className="lg:flex lg:items-end lg:justify-between">
            <div>
                <div className="flex justify-center lg:justify-start">
                    <Link className="block" href="/">
                        <span className="sr-only">Home</span>
                        <img src="/logo.svg" className="h-7 w-auto" />
                    </Link>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-dark-2 lg:text-left">
                    Elevate Your Experience with Iconic Collectibles. Discover, Trade, and Dominate the Heroic Universe on Our Exclusive Platform.
                </p>
            </div>

            <ul
                className="mt-12 text-sm flex flex-wrap  justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
            >
                <li>
                <a className="text-dark-2 transition hover:text-opacity-90" href="/"> Explore </a>
                </li>

                <li>
                <a className="text-dark-2 transition hover:text-opacity-90" href="/"> Collection </a>
                </li>

                <li>
                <a className="text-dark-2 transition hover:text-opacity-90" href="/"> Portfolio </a>
                </li>

                <li>
                <a className="text-dark-2 transition hover:text-opacity-90" href="/"> Watchlist </a>
                </li>
            </ul>
            </div>

            <p className="mt-12 text-center text-sm text-dark-1 lg:text-right">
                Copyright &copy; 2024. All rights reserved.
            </p>
        </div>
        </footer>
    );
}
