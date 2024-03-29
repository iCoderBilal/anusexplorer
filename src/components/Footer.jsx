import webLogo from "../assets/web-logo.png"

function Footer() {
    return (
        <>
            <div className="footer bg-black pr-3 pl-3 lg:pr-[15vw] lg:pl-[15vw] pt-16 pb-16 lg:pt-24 lg:pb-24">
                <div className="footer-container flex flex-wrap lg:flex-nowrap">
                    <div className="footer-center w-[90vw] lg-[25vw] flex justify-center mb-8 lg:mb-0">
                        <img src={webLogo} alt="" className="lg:w-[9vw] lg:h-[7vw] w-[30vw]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
