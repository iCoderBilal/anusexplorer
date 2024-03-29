import webLogo from "../assets/web-logo.webp"

function Footer() {
    return (
        <>
            <div className="footer bg-black pt-16 pb-16 lg:pt-24 lg:pb-24">
                <div className="footer-container flex flex-col items-center">
                    <div className="footer-logo mb-8">
                        <img src={webLogo} alt="Website Logo" className="lg:w-[9vw] lg:h-[7vw] w-[30vw]" />
                    </div>
                    <ul className="flex justify-center gap-4">
                        <li>
                            <a href="https://t.me/UranusCommunity" target="_blank" rel="noopener noreferrer">
                                <img src="/path/to/your/telegram-icon.png" alt="Telegram" className="h-8 w-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://coinmarketcap.com/currencies/uranus-sol/" target="_blank" rel="noopener noreferrer">
                                <img src="/path/to/your/coinmarketcap-icon.png" alt="CoinMarketCap" className="h-8 w-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://dexscreener.com/solana/cu4pxu7vh7cfgjmsfzfehpp9aj6fa7ciqdsbvs5hekzk" target="_blank" rel="noopener noreferrer">
                                <img src="/path/to/your/dexscreener-icon.png" alt="Dexscreener" className="h-8 w-8" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
