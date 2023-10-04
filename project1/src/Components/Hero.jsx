// import React from 'react'

const Hero = () => {
    return (
        <main className="hero ">
            <div className="hero-Content">
                <h1>
                    YOUR FEET
                    DESERVE
                    THE BEST
                </h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-buttons">
                    <button>Shop Now</button>
                    <button className="secondry-btn">Catergory</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                </div>

                <div className="brand-icon">
                    <img src="../../public/images/flipkart.png" alt="" />
                    <img src="../../public/images/amazon.png" alt="" />
                </div>

            </div>
            <div className="hero-Image">
                <img src="../../public/images/shoe_image.png" alt="" />
            </div>

        </main>
    )
}

export default Hero
