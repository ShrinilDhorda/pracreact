import React from 'react'
import { Background, Parallax } from 'react-parallax'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
const Parallax1 = () => {
    return (
        <>
            <div className=" ">

                <Parallax strength={500}
                    bgClassName='p1'
                    bgImage={p1}
                >
                    <div className="h-screen"></div>

                </Parallax >
                <Parallax bgClassName='p1' strength={200} blur={{ min: -5, max: 3 }} bgImage={p2}>
                    <div className="h-screen"></div>
                </Parallax >
                <Parallax bgClassName='p1' strength={-500} bgImage={p3}>
                    <div className="h-screen"></div>

                </Parallax >

            </div>
        </>
    )
}

export default Parallax1