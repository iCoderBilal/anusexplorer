import influence from "../assets/influence.png"


function Influence(){
    return(
        <>
           <div id="evolution" className="pr-3 pl-3 lg:pr-[15vw] lg:pl-[15vw]">
                <div className="section-container flex gap-10 flex-wrap lg:flex-nowrap lg:justify-between justify-center pt-8 pb-24 lg:pt-16">
                    <div className="flex justify-center five-section-img h-auto lg:w-[27vw] w-[80vw] lg:order-2" data-aos="fade-left">
                        <img
                            src={influence}
                            alt="Description"
                            className="w-[100%] border-radius rounded-[40px]"
                        />
                    </div>

                    <div className="flex lg:w-[35vw] w-[90vw] text-part items-center" data-aos="fade-right">
                        <div>
                        <h1 className="text-white lg:p-5 p-4 text-[10vw] lg:text-[2.5vw]  leading-[12vw] lg:leading-[3vw] lg:text-left text-center font-bold">
                    Authenticity with Uranus
                </h1>
                        <p className="lg:p-5 p-4 text-[4vw] lg:text-[1.2vw] text-slate-300 lg:leading-[1.5vw] lg:text-left text-center">
                        Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on living by your values and perhaps engage more actively in humanitarian efforts.<br/><br/>
                        In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on the border of Aquarius. So, we are slowly moving into a new age, from Pisces to Aquarius.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Influence