import React, { Component } from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import vedio1 from '../Video/video-2.mp4'

export default class HeroSection extends Component {
    render() {
        return (
            <>
        <div className="hero-container">
                     <video src={vedio1} autoPlay loop muted />
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waithing for ?</p>
                    <div className="hero-btns">
                        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Get START
                        </Button>
                        <Button className="btns" buttonStyle='btn-primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' />
                        </Button>
                    </div>
        </div>
            </>
        )
    }
}



// import React from 'react'
// import '../App.css'
// import { Button } from './Button'
// import './HeroSection.css'


// function HeroSection() {
//     return (
//         <div className="hero-container">
//             <video src="/video/video-1.mp4" autoPlay loop muted />
//             <h1>ADVENTURE AWAITS</h1>
//             <p>What are you waithing for ?</p>
//             <div className="hero-btns">
//                 <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Get START
//                 </Button>
//                 <Button className="btns" buttonStyle='btn-primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' />
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default HeroSection
