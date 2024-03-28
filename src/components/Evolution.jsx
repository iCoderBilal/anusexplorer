import evolution from "../assets/evolution.png"


function Evolution(){
    return(
        <>
           <div id="evolution" className="pr-3 pl-3 lg:pr-[15vw] lg:pl-[15vw]">
                <div className="section-container flex gap-10 flex-wrap lg:flex-nowrap lg:justify-between justify-center pt-16 pb-24 lg:pt-24">
                    <div className="flex justify-center five-section-img h-auto lg:w-[27vw] w-[80vw]" data-aos="fade-right">
                        <img
                            src={evolution}
                            alt="Description"
                            className="w-[100%] border-radius rounded-[40px]"
                        />
                    </div>

                    <div className="flex lg:w-[35vw] w-[90vw] text-part items-center" data-aos="fade-left">
                        <div>
                        <h1 className="text-white lg:p-5 p-4 text-[10vw] lg:text-[2.5vw]  leading-[12vw] lg:leading-[3vw] lg:text-left text-center font-bold">
                        A Time for Evolution
                </h1>
                        <p className="lg:p-5 p-4 text-[4vw] lg:text-[1.2vw] text-slate-300 lg:leading-[1.5vw] lg:text-left text-center">
                        Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on Saturday, January 27, then retrogrades again on Sunday, September 1. This suggests ongoing evolution in your home life and personal growth.
                        </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Evolution