import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/page-construction.json'

function UncontrolledLottie () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Lottie options={defaultOptions}
            height={250}
            width={322}
        />
    )
}

export default UncontrolledLottie