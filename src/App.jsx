import { useRef, useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import "./index.css";
// import Sparkle from "./components/SparkleIcon";
import { Flash, Heart, People, Shop, Category, Clock, Chart } from 'iconsax-react'
import ArrowRight from "./components/ArrowRightIcon";
import ImageCarousel from "./components/ImageCarousel";
import landing from './assets/Buytee official Dashboard.png'
import Sample from './assets/Store sample.png'
import FloatSales from './assets/floating sales.png'
import FirstStep from './assets/first-step.png'
import SecondStep from './assets/second-step.png'
import ThirdStep from './assets/third-step.png'
import FourthStep from './assets/fourth-step.png'
import FadeIn from "./components/FadeIn";

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Hero />

      <Offer />

      <HowItWorks />

      <Features />
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden max-h-[140vh] max-lg:h-[128vh] w-[97%] mx-auto rounded-b-[40px] max-sm:max-h-screen max-sm:pb-12 max-sm:w-full max-sm:text-[12px] max-sm:rounded-b-none">

      <div className="blobs mx-auto flex items-center justify-center  mb-25">
        {/* Left Small Blob */}
        <div className="absolute top-114.5 -left-37.25 blur-[200px] bg-[#C5FFE7] h-149 w-113.75 rounded-[100%] max-sm:bg-[#c5ffe7]/30"></div>

        {/* Right Small Blob */}
        <div className="absolute top-114.5 -right-37.25 blur-[200px] bg-[#C5FFE7] h-149 w-113.75 rounded-[100%] max-sm:bg-[#c5ffe7]/30"></div>

        {/* Center Blob */}
        <div className="absolute top-163.5  blur-[200px] bg-[#C5FFE7] h-180.5 w-full rounded-[100%] max-sm:bg-[#c5ffe7]/30"></div>
      </div>

      <div className="relative z-40 flex flex-col items-center space-y-8 max-sm:space-y-6 mt-50 max-sm:mt-40">
        <span className="font-family text-[14px] text-center w-fit flex gap-2 px-2.5 pt-2 pb-2 bg-[#F6FEFD] border border-brand font-medium text-brand rounded-xl max-lg:text-[13.5px] max-lg:gap-1.5 max-sm:text-[12px] max-sm:pt-1.5 max-sm:pb-1 max-sm:px-2.5 max-sm:rounded-[10px]"><Flash size={22} color="#19CFA3" variant="Bold" className="max-lg:w-4.5 max-sm:w-4" />New Feature: Intelligent Product Sorting</span>

        <FadeIn direction="up" delay={0.4}>
        <h1 className="capitalize w-170 leading-16.25 text-center font-family text-[60px] tracking-[-2px] font-black max-[1024px]:text-[45px] max-[1024px]:tracking-[-1px] max-[1024px]:leading-11.5 max-[1024px]:w-140 max-sm:text-[28px] max-sm:tracking-[-1px] max-sm:leading-9 max-sm:w-85">Grow your <span className="text-brand ">business</span> with a store built for you</h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="font-family text-text/70 font-medium w-125 text-center max-[1024px]:text-[15px] max-[1024px]:w-115 max-sm:text-[12px] max-sm:w-80">BuyTree helps sellers launch personalized online stores designed to showcase products and drive sales.</p>
        </FadeIn>

        <button className='mt-4 font-medium font-family flex space-x-4 items-center bg-brand text-[#ffffff] px-6.5 py-3.5 rounded-full gap-1.5 shadow-hero hover:shadow-hover duration-400 cursor-pointer max-sm:text-[15px]'>Get Started<ArrowRight /></button>
      </div>

      <div className=" hero-img mt-22 w-[70%] max-xl:w-[80%] relative z-40 flex justify-center items-center mx-auto p-2.5 border-2 border-[#ffffff] bg-[#f9f9f9]/50 rounded-[20px] shadow-hero-img max-sm:w-[90%] max-sm:mt-20 max-sm:p-1.5 max-sm:rounded-xl">
        <img src={landing} alt="buytree" className="w-full h-full shadow-hero-img/8 rounded-[10px] max-sm:rounded-md"/>
      </div>

    </section>
  )
}


const Offer = () => {
  return (
    <section className="features overflow-hidden relative mx-auto pt-25 pb-50 flex flex-col items-center space-y-8 max-sm:space-y-6 max-sm:pt-12 max-sm:-mb-10">
      <span className="font-family mb-20 text-[14px] text-center w-fit flex gap-2 px-2.5 pt-2 pb-2 bg-[#FEFEFE] border border-[#ECECEC] font-medium text-text rounded-xl max-lg:text-[13.5px] max-lg:gap-1.5 max-sm:text-[12px] max-sm:pt-1.5 max-sm:pb-1 max-sm:px-2.5 max-sm:rounded-[10px]"><People size={22} color="#868686" variant="Bold" className="max-lg:w-4.5 max-sm:w-4" />Trusted by Entrepreneurs</span>

      <ImageCarousel />

      <div className="offer  flex justify-between items-center w-full px-40 max-2xl:px-25 mt-50 max-sm:px-5 max-sm:mt-30 max-sm:gap-30 max-sm:w-full max-sm:block">
        <div className="flex flex-col gap-7">
          <span className="font-family text-[14px] text-center w-fit flex gap-2 px-2.5 pt-2 pb-2 bg-[#F6FEFD] border border-brand font-medium text-brand rounded-xl max-lg:text-[13.5px] max-lg:gap-1.5 max-sm:text-[12px] max-sm:pt-1.5 max-sm:pb-1 max-sm:px-2.5 max-sm:rounded-[10px]"><Flash size={22} color="#19CFA3" variant="Bold" className="max-lg:w-4.5 max-sm:w-4 " />What we Offer</span>
          <h2 className="font-family text-[60px] font-bold -tracking-[1.5px] w-155 leading-17 max-sm:text-[30px] max-sm:tracking-[-1.5px] max-sm:leading-9.5 max-2xl:text-[54px] max-2xl:leading-[61px]">Launch your own <br /> online store in <span className="text-brand">minutes</span></h2>
          <p className="font-family text-text w-125 leading-6.25 font-medium max-sm:w-[85%] max-sm:text-[14px] max-sm:leading-5.75">Create a branded storefront, list your products, and start reaching customers with a smoother online selling experience.</p>

          <div className="stat font-family flex  gap-[12%] mt-20 max-sm:mt-10 max-2xl:mt-15 max-2xl:gap-[6%]">
            <div className="flex flex-col gap-5 max-sm:gap-3.5">
              <span className="flex gap-4.5 items-center text-[50px] tracking-[-1px] font-bold max-sm:text-[30px] max-sm:gap-3.5 max-2xl:text-[45px] "><Shop size={40} color="#19cfa3" variant="Bold" className="max-sm:w-7" /> 22k+</span>
              <p className="text-text text-[16px] leading-6.25 w-65 font-medium max-sm:text-[12px] max-sm:leading-5 max-sm:w-40">Stores launched by sellers nationwide</p>
            </div>

            <div className="flex flex-col gap-5 max-sm:gap-3.5">
              <span className="flex gap-4.5 items-center text-[50px] tracking-[-1px] font-bold  max-sm:text-[30px] max-sm:gap-3.5 max-2xl:text-[45px]"><Heart size={40} color="#19cfa3" variant="Bold" className="max-sm:w-7"/> 89%</span>
              <p className="text-text text-[16px] leading-6.25 w-65 font-medium max-sm:text-[12px] max-sm:leading-5">Seller satisfaction with <br /> platform usability</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center p-3 shadow-offer border-2 bg-[#f5f5f5]/50 border-[#ffffff] w-fit rounded-[40px] max-sm:mt-20 max-sm:p-1.5 max-sm:rounded-[25px] max-sm:w-[90%] max-sm:mx-auto duration-300 max-2xl:p-2">
          <img src={Sample} alt="" className="w-150 max-2xl:w-115 rounded-[31px] z-40 max-sm:w-full max-sm:rounded-[15px]" />
          <img src={FloatSales} alt="" className="absolute w-105 max-2xl:w-86 -bottom-27 -left-35 max-2xl:-bottom-24 max-2xl:-left-30 z-40 max-sm:w-[65%] max-sm:-bottom-13 max-sm:-left-12" />

          <div className="absolute top-20 right-0 blur-[150px] bg-[#79ffc5]/30 h-109 w-113.75 rounded-[100%] max-sm:w-75 max-sm:h-65 max-sm:blur-[100px]"></div>
        </div>
      </div>
    </section>
  )
}
  

const HowItWorks = () => {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const isMobile = window.innerWidth < 640
    if (!isMobile) return

    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % 4
        const container = scrollRef.current
        if (!container) return prev

        const cards = container.querySelectorAll('.card')
        const card = cards[next]
        if (!card) return prev

        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        })
        return next
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  // Update active dot when user manually swipes
  useEffect(() => {
    const isMobile = window.innerWidth < 640
    if (!isMobile) return

    const container = scrollRef.current
    if (!container) return

    let timeout

    const handleScroll = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        const cards = container.querySelectorAll('.card')
        let closest = 0
        let closestDistance = Infinity

        cards.forEach((card, index) => {
          const cardCenter = card.offsetLeft - container.offsetLeft + card.offsetWidth / 2
          const containerCenter = container.scrollLeft + container.offsetWidth / 2
          const distance = Math.abs(cardCenter - containerCenter)

          if (distance < closestDistance) {
            closestDistance = distance
            closest = index
          }
    })

      setActive(closest)
    }, 150) // waits 150ms after scroll stops before updating
  }

  container.addEventListener('scroll', handleScroll)
  return () => {
    container.removeEventListener('scroll', handleScroll)
    clearTimeout(timeout)
  }
}, [])

  return (
    <section className="how-it-works bg-[#F9FAFC] pt-25 pb-25 max-sm:pt-20 max-sm:pb-30 z-45">

      <h2 className="font-family text-[55px] font-bold text-center -tracking-[2px] leading-17 max-sm:text-[30px] max-sm:tracking-[-1px] max-sm:leading-9.5">
        How <span className="text-brand">BuyTree</span> Works?
      </h2>

      {/* Cards container */}
      <div
        ref={scrollRef} className="cards flex gap-6.5 justify-center mt-25 max-sm:justify-start max-sm:mt-20 max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:scroll-smooth max-sm:scrollbar-hide max-sm:flex-nowrap max-sm:px-8 max-2xl:px-0"
      >

        {/* Left padding anchor — forces first card to snap from the very start */}
        <div className="hidden max-sm:block max-sm:flex-shrink-0 max-sm:w-0" />

        <div className="card bg-white border border-[#e7e7e7] h-120 w-[20%] rounded-[25px] shadow-card relative overflow-hidden
          max-sm:w-[85vw] max-sm:flex-shrink-0 max-sm:h-75
          max-sm:snap-center max-sm:shadow-card/2 max-2xl:h-[42vh] max-2xl:w-[21%]">
          <img src={FirstStep} alt="First Step" className="w-full max-sm:w-[70%] mx-auto max-sm:-mt-2" />
          <span className="bg-brand h-8 w-8 rounded-full absolute text-center flex items-center justify-center text-white font-medium top-5 left-5 font-family shadow-hero">1</span>
          <div className="info flex flex-col gap-3 z-10 pt-15 pb-5 px-5.5 absolute bottom-0 bg-linear-to-t from-white to-[#ffffff00] via-white w-full max-sm:pt-10 max-sm:gap-2">
            <h3 className="font-family text-[22px] font-semibold tracking-[-0.4px] max-sm:text-[18px]">Create Your Store</h3>
            <p className="font-family text-[#aaaaaa] text-[15px] max-sm:text-[14px]">Set up a custom storefront in a matter of minutes without technical skills.</p>
          </div>
        </div>

        <div className="card bg-white border border-[#e7e7e7] h-120 w-[20%] rounded-[25px] shadow-card relative overflow-hidden
          max-sm:w-[85vw] max-sm:flex-shrink-0 max-sm:h-75
          max-sm:snap-center max-sm:shadow-card/2 max-2xl:h-[42vh] max-2xl:w-[21%]">
          <img src={SecondStep} alt="Second Step" className="w-full max-sm:w-[70%] mx-auto" />
          <span className="bg-brand h-8 w-8 rounded-full absolute text-center flex items-center justify-center text-white font-medium top-5 left-5 font-family shadow-hero">2</span>
          <div className="info flex flex-col gap-3 z-10 pt-15 pb-5 px-5.5 absolute bottom-0 bg-linear-to-t from-white to-[#ffffff00] via-white w-full max-sm:pt-10 max-sm:gap-2">
            <h3 className="font-family text-[22px] font-semibold tracking-[-0.4px] max-sm:text-[18px]">Add Your Products</h3>
            <p className="font-family text-[#aaaaaa] text-[15px] max-sm:text-[14px]">Upload products, set prices, details and organize your catalog easily.</p>
          </div>
        </div>

        <div className="card bg-white border border-[#e7e7e7] h-120 w-[20%] rounded-[25px] shadow-card relative overflow-hidden
          max-sm:w-[85vw] max-sm:flex-shrink-0 max-sm:h-75
          max-sm:snap-center max-sm:shadow-card/2 max-2xl:h-[42vh] max-2xl:w-[21%]">
          <img src={ThirdStep} alt="Third Step" className="w-full max-sm:w-[70%] mx-auto" />
          <span className="bg-brand h-8 w-8 rounded-full absolute text-center flex items-center justify-center text-white font-medium top-5 left-5 font-family shadow-hero">3</span>
          <div className="info flex flex-col gap-3 z-10 pt-15 pb-5 px-5.5 absolute bottom-0 bg-linear-to-t from-white to-[#ffffff00] via-white w-full max-sm:pt-10 max-sm:gap-2">
            <h3 className="font-family text-[22px] font-semibold tracking-[-0.4px] max-sm:text-[18px]">Start Selling Online</h3>
            <p className="font-family text-[#aaaaaa] text-[15px] max-sm:text-[14px]">Share your store link and accept secure online payments instantly.</p>
          </div>
        </div>

        <div className="card bg-white border border-[#e7e7e7] h-120 w-[20%] rounded-[25px] shadow-card relative overflow-hidden
          max-sm:w-[85vw] max-sm:flex-shrink-0 max-sm:h-75
          max-sm:snap-center max-sm:shadow-card/2 max-2xl:h-[42vh] max-2xl:w-[21%]">
          <img src={FourthStep} alt="Fourth Step" className="w-full max-sm:w-[70%] mx-auto max-sm:-mt-2" />
          <span className="bg-brand h-8 w-8 rounded-full absolute text-center flex items-center justify-center text-white font-medium top-5 left-5 font-family shadow-hero">4</span>
          <div className="info flex flex-col gap-3 z-10 pt-15 pb-5 px-5.5 absolute bottom-0 bg-linear-to-t from-white to-[#ffffff00] via-white w-full max-sm:pt-15 max-sm:gap-2">
            <h3 className="font-family text-[22px] font-semibold tracking-[-0.4px] max-sm:text-[18px]">Manage & Grow</h3>
            <p className="font-family text-[#aaaaaa] text-[15px] max-sm:text-[14px]">Track orders, manage customers, and grow your online business smoothly.</p>
          </div>
        </div>

      </div>


      {/* Dots - mobile only */}
      <div className="hidden max-sm:flex justify-center gap-2 mt-6">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300
              ${active === i ? 'w-6 bg-brand' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>

      <button className='font-medium font-family flex space-x-4 items-center bg-brand text-[#ffffff] px-8 py-4 rounded-full gap-1.5 shadow-hero hover:shadow-hover duration-400 cursor-pointer mt-25 mx-auto max-sm:mt-15 max-sm:px-6.5 max-sm:py-3'>Explore More</button>
    </section>
  )
}

const Features = () => {
  return (
    <section className="features relative pt-40 pb-50 px-40 flex justify-between items-start">
      <div className="flex flex-col space-y-8 max-sm:space-y-6 max-sm:pt-12 max-sm:px-5 sticky top-34">
      <span className="font-family text-[14px] w-fit flex gap-2 px-2.5 pt-2 pb-2 bg-[#F6FEFD] border border-brand font-medium text-brand rounded-xl max-lg:text-[13.5px] max-lg:gap-1.5 max-sm:text-[12px] max-sm:pt-1.5 max-sm:pb-1 max-sm:px-2.5 max-sm:rounded-[10px]"><People size={22} color="#19CFA3" variant="Bold" className="max-lg:w-4.5 max-sm:w-4 " />Our Features</span>
          <h2 className="font-family text-[60px] font-bold -tracking-[1.5px] w-155 leading-17 max-sm:text-[30px] max-sm:tracking-[-1.5px] max-sm:leading-9.5 max-sm:w-fit">Perfect <span className="text-brand">features</span>  <br />built for modern sellers </h2>
          <p className="font-family text-text w-130 leading-6.25 font-medium max-sm:w-[85%] max-sm:text-[14px] max-sm:leading-5.75">Powerful tools designed to simplify how you sell, manage, and grow your business online—so you can stay in control, move faster, and scale with confidence.</p>

          <button className='mt-4 font-medium font-family flex space-x-4 items-center bg-brand text-[#ffffff] px-6.5 py-3.5 rounded-full gap-1.5 shadow-hero hover:shadow-hover duration-400 cursor-pointer max-sm:text-[15px] w-fit'>Get Started<ArrowRight /></button>

      </div>
      {/* <div className="sticky top-40 right-2 blur-[150px] bg-[#79ffc5]/30 h-109 w-113.75 rounded-[100%] max-sm:w-75 max-sm:h-65 max-sm:blur-[100px]"></div> */}
      <div className="feature-cards flex flex-col gap-7.5 max-sm:gap-6 max-sm:mt-15">
        <div className="w-[35vw] h-95 bg-[#f9fafc] p-9 border border-[#e7e7e7] shadow-feature/5 rounded-[30px] sticky top-34">
          <span className='p-4.5 rounded-[14px] bg-linear-to-b from-brand to-[#16AC88] flex items-center w-fit shadow-icon'><Shop size={30} color="#ffffff" variant="Bold" /></span>
          <h3 className="font-family text-[30px] font-semibold tracking-[-0.4px] mt-25">Custom Storefronts</h3>
          <p className="font-family text-[#7D7E7F] text-[16px] w-140 mt-3 font-medium">Powerful tools designed to simplify how you sell, manage, and grow your business online—so you can stay in control, move faster, and scale with confidence.</p>
        </div>
        <div className="w-[35vw] h-95 bg-[#f9fafc] p-9 border border-[#e7e7e7] shadow-feature/5 rounded-[30px] sticky top-34">
          <span className='p-4.5 rounded-[14px] bg-linear-to-b from-brand to-[#16AC88] flex items-center w-fit shadow-icon'><Category size={30} color="#ffffff" variant="Bold" /></span>
          <h3 className="font-family text-[30px] font-semibold tracking-[-0.4px] mt-25">Product Management</h3>
          <p className="font-family text-[#7D7E7F] text-[16px] w-140 mt-3 font-medium">Powerful tools designed to simplify how you sell, manage, and grow your business online—so you can stay in control, move faster, and scale with confidence.</p>
        </div>
        <div className="w-[35vw] h-95 bg-[#f9fafc] p-9 border border-[#e7e7e7] shadow-feature/5 rounded-[30px] sticky top-34">
          <span className='p-4.5 rounded-[14px] bg-linear-to-b from-brand to-[#16AC88] flex items-center w-fit shadow-icon'><Clock size={30} color="#ffffff" variant="Bold" /></span>
          <h3 className="font-family text-[30px] font-semibold tracking-[-0.4px] mt-25">Order Tracking</h3>
          <p className="font-family text-[#7D7E7F] text-[16px] w-140 mt-3 font-medium">Powerful tools designed to simplify how you sell, manage, and grow your business online—so you can stay in control, move faster, and scale with confidence.</p>
        </div>
        <div className="w-[35vw] h-95 bg-[#f9fafc] p-9 border border-[#e7e7e7] shadow-feature/5 rounded-[30px] sticky top-34">
          <span className='p-4.5 rounded-[14px] bg-linear-to-b from-brand to-[#16AC88] flex items-center w-fit shadow-icon'><Chart size={30} color="#ffffff" variant="Bold" /></span>
          <h3 className="font-family text-[30px] font-semibold tracking-[-0.4px] mt-25">Sales Insights</h3>
          <p className="font-family text-[#7D7E7F] text-[16px] w-140 mt-3 font-medium">Powerful tools designed to simplify how you sell, manage, and grow your business online—so you can stay in control, move faster, and scale with confidence.</p>
        </div>
        <div className="w-[35vw] h-95 bg-[#f9fafc] p-9 border border-[#e7e7e7] shadow-feature/5 rounded-[30px] sticky top-34">
          <span className='p-4.5 rounded-[14px] bg-linear-to-b from-brand to-[#16AC88] flex items-center w-fit shadow-icon'><Flash size={30} color="#ffffff" variant="Bold" /></span>
          <h3 className="font-family text-[30px] font-semibold tracking-[-0.4px] mt-25">Smart Selling Tools</h3>
          <p className="font-family text-[#7D7E7F] text-[16px] w-140 mt-3 font-medium">Powerful tools designed to simplify how you sell, manage, and grow your business online—so you can stay in control, move faster, and scale with confidence.</p>
        </div>
      </div>
    </section>
  )
}

export default App;
