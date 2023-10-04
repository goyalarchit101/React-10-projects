// import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src='../public/images/brand_logo.png' />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button className="login">
                    Login
                </button>
            </nav>
        </div>
    )
}

export default Navigation
