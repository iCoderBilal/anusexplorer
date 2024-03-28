import innovators from "../assets/Innovators.png";

function Innovators() {
  return (
    <>
      <div id="evolution" className="pr-3 pl-3 lg:pr-[15vw] lg:pl-[15vw]">
        <div className="section-container flex gap-10 flex-wrap lg:flex-nowrap lg:justify-between justify-center pt-8 pb-24 lg:pt-16">
          <div className="flex justify-center five-section-img h-auto lg:w-[27vw] w-[80vw]" data-aos="fade-right">
            <img
              src={innovators}
              alt="Description"
              className="w-[100%] border-radius rounded-[40px]"
            />
          </div>

          <div className="flex lg:w-[35vw] w-[90vw] text-part items-center" data-aos="fade-left">
            <div>
              <h1 className="text-white lg:p-5 p-4 text-[10vw] lg:text-[2.5vw]  leading-[12vw] lg:leading-[3vw] lg:text-left text-center font-bold">
              Aquarius and Uranus
              </h1>
              <p className="lg:p-5 p-4 text-[4vw] lg:text-[1.2vw] text-slate-300 lg:leading-[1.5vw] lg:text-left text-center">
              Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising events. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional nature of these visionary air signs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Innovators;
