"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {

  // Get top 3 markets by volume


  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <a href="https://suimarket.io" className="absolute top-[1rem] left-[50%] transform -translate-x-1/2  sm:top-[20%] md:top-[10%]">
        <img src="/img/logo.svg" alt="logo" className="w-[250px] h-auto cursour-pointer" />
      </a>
      <section className="text-center  !pr-[20px] !pl-[20px]">
        <h1 className="text-6xl md:text-8xl font-bold mb-10 md:mb-16">
          COMING SOON
        </h1>
        <a href="mailto:admin@suimarket.io">
          <button
            className="w-full text-[28px] md:w-1/2 mb-8 md:mb-12 mx-auto bg-gradient-to-r from-green-300 to-blue-300 text-white font-semibold transition-all duration-300 hover:bg-white hover:!text-black rounded-[8px]">
            Contact us
          </button>
        </a>

        <ul className="w-full flex justify-center gap-4 md:gap-10 text-gray-500 text-lg md:text-xl">
          <li>
            <a
              href="#"
              className="flex items-center justify-center p-7 w-10 h-10 border-1 border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          {/* Repeat for other icons */}
          <li>
            <a
              href="https://twitter.com/suimarket_io"
              target="_blank"
              className="flex items-center justify-center p-7 w-10 h-10 border-1 border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center p-7 w-10 h-10 border-1 border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center p-7 w-10 h-10 border-1 border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
