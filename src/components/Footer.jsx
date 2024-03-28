import webLogo from "../assets/web-logo.png"

function Footer(){
    return(
        <>
    <div className="footer pr-3 pl-3 lg:pr-[15vw] lg:pl-[15vw] pt-16 pb-16 lg:pt-24 lg:pb-24">
     <div className="footer-container flex flex-wrap lg:flex-nowrap">


        <div className="footer-left w-[90vw] lg-[25vw] mb-8 lg:mb-0">

            <h2 className="text-white  text-[10vw] lg:text-[2.5vw]  leading-[12vw] lg:leading-[3vw] lg:text-left text-center font-bold">Partners </h2>
            <p  className="mt-6 text-[4vw] lg:text-[1.2vw] text-slate-300 lg:leading-[1.5vw] lg:text-left text-center">
                
                <a href="https://dia.wiki/">Decentralized Intelligence Agency</a><br/>
               <a href="https://worldvibeweb.org/"> World Vibe Web</a><br/>
               <a href="https://purplerock.xyz/"> Purplerock</a>
</p>
        </div>


        <div className="footer-center w-[90vw] lg-[25vw] flex justify-center mb-8 lg:mb-0">
          <img src={webLogo} alt="" className="lg:w-[9vw] lg:h-[7vw] w-[30vw]"/>
</div>


<div className="footer-left w-[90vw] lg-[25vw] flex justify-center">
    <div>

<h2 className="text-white  text-[10vw] lg:text-[2.5vw]  leading-[12vw] lg:leading-[3vw] lg:text-left text-center font-bold">Resources </h2>
<p  className="mt-6 text-[4vw] lg:text-[1.2vw] text-slate-300 lg:leading-[1.5vw] lg:text-left text-center">
    
    <a href="https://dia.wiki/">Effective Vibes</a><br/>
   <a href="https://goldenmeme.org/"> Golden Meme</a><br/>
 
</p>
</div>
</div>

     </div>

    </div>
        </>
    )
}

export default Footer;