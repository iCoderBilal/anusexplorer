import webLogo from "../assets/anus_large.gif"
import 'aos/dist/aos.css';

function Hero() {
    return(
        <>
        <div className="hero-centered">
      <div id="hero-section">
        <div className="website-logo pt-8">
           <img src={webLogo} alt="Uranus Logo" className="w-[25vw] lg:w-[9vw] mx-auto" />
        </div>
        <div className="hero-section-main pb-20">
                <h1 data-aos="zoom-in" className="pt-16 lg:pt-32 text-[10vw] lg:text-[4vw] lg:pl-[250px] lg:pr-[250px] pl-3 pr-3 leading-[12vw] lg:leading-[5.5vw] text-center font-bold" >
                Explore the Universe of
                <br/>
                <b className="text-[13vw] leading-[19vw] lg:text-[7vw] lg:leading-[8vw]">$ANUS</b>
                </h1>
                <p className="mt-6 lg:mb-20 mb-14 text-[4.5vw] lg:text-[1.5vw] lg:pl-[350px] lg:pr-[350px] pl-3 pr-3 text-slate-300 lg:leading-[1.9vw] text-center">
                Join us on a journey to the stars with $ANUS.</p>

                <a href="https://coinmarketcap.com/currencies/uranus-sol/" className="mx-auto text-center mt-10 py-[15px] px-[40px] bg-custom-blue lg:text-[1.5vw] lg:leading-[2.2vw] font-semibold text-white rounded-[40px]">Future with $URANUS</a>
            </div>
      
        </div>
        </div>
        </>
    )
}

export default Hero; 