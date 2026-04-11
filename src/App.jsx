import Navbar from "./components/Navbar";
import "./index.css";
// import Sparkle from "./components/SparkleIcon";
import { Flash } from 'iconsax-react'
import ArrowRight from "./components/ArrowRightIcon";
import landing from './assets/Buytee official Dashboard.png'

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Hero />
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden max-h-[140vh] max-lg:h-[128vh] w-[97%] mx-auto rounded-b-[40px] max-sm:h-[82vh] max-sm:pb-12 max-sm:w-full max-sm:text-[12px] max-sm:rounded-b-none">

      <div className="blobs mx-auto flex items-center justify-center  mb-25">
        {/* Left Small Blob */}
        <div className="absolute top-114.5 -left-37.25 blur-[200px] bg-[#C5FFE7] h-149 w-113.75 rounded-[100%]"></div>

        {/* Right Small Blob */}
        <div className="absolute top-114.5 -right-37.25 blur-[200px] bg-[#C5FFE7] h-149 w-113.75 rounded-[100%]"></div>

        {/* Center Blob */}
        <div className="absolute top-163.5  blur-[200px] bg-[#C5FFE7] h-180.5 w-full rounded-[100%]"></div>
      </div>

      <div className="relative z-40 flex flex-col items-center space-y-8 max-sm:space-y-6 mt-50 max-sm:mt-40">
        <span className="font-family text-[14px] text-center w-fit flex gap-2 px-2.5 pt-2 pb-2 bg-[#F6FEFD] border border-brand font-medium text-brand rounded-xl max-lg:text-[13.5px] max-lg:gap-1.5 max-sm:text-[12px] max-sm:pt-1.5 max-sm:pb-1 max-sm:px-2.5 max-sm:rounded-[10px]"><Flash size={22} color="#19CFA3" variant="Bold" className="max-lg:w-4.5 max-sm:w-4" />New Feature: Intelligent Product Sorting</span>

        <h1 className="capitalize w-170 leading-16.25 text-center font-family text-[60px] tracking-[-2px] font-black max-[1024px]:text-[45px] max-[1024px]:tracking-[-1px] max-[1024px]:leading-11.5 max-[1024px]:w-140 max-sm:text-[28px] max-sm:tracking-[-1px] max-sm:leading-9 max-sm:w-85">Grow your <span className="text-brand">business</span> with a store built for you</h1>

        <p className="font-family text-text/70 font-medium w-125 text-center max-[1024px]:text-[15px] max-[1024px]:w-115 max-sm:text-[12px] max-sm:w-80">BuyTree helps sellers launch personalized online stores designed to showcase products and drive sales.</p>

        <button className='mt-4 font-medium font-family flex space-x-4 items-center bg-brand text-[#ffffff] px-6 py-3 rounded-xl gap-1.5 shadow-hero hover:shadow-hover duration-400 cursor-pointer'>Get Started<ArrowRight /></button>
      </div>

      <div className=" hero-img mt-22 w-[70%] max-xl:w-[80%] relative z-40 flex justify-center items-center mx-auto p-2.5 border-2 border-[#ffffff] bg-[#f9f9f9]/50 rounded-[20px] shadow-hero-img max-sm:w-[90%] max-sm:mt-12 max-sm:p-1.5 max-sm:rounded-xl">
        <img src={landing} alt="buytree" className="w-full h-full shadow-hero-img/8 rounded-[10px] max-sm:rounded-md"/>
      </div>


    </section>
  )
}

export default App;
