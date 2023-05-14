import React from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import { Parallax } from 'react-parallax'
const NewGallery = () => {
    return (
        <>
            <div className="wholescreen w-full  grid grid-cols-2 gap-1 bg-black ">
                <div className="left-half space-y-1  ">

                    <Parallax strength={500}
                        bgClassName='p1'
                        bgImage={p1}
                    >
                        <div className="h-[34rem]  "></div>

                    </Parallax >
                    <Parallax strength={500}
                        bgClassName='p1'
                        bgImage={p3}
                    >
                        <div className="h-[34rem]  "></div>

                    </Parallax >
                    <Parallax strength={500}
                        bgClassName='p1'
                        bgImage={p2}
                    >
                        <div className="h-[34rem]  "></div>

                    </Parallax >
                    <Parallax strength={500}
                        bgClassName='p1'
                        bgImage={p3}
                    >
                        <div className="h-[34rem]  "></div>

                    </Parallax >
                </div>
                <div className="right-half  space-y-1">
                    <Parallax bgClassName='p1' strength={-300} bgImage={p2}>
                        <div className="h-[34rem]  "></div>

                    </Parallax >
                    <Parallax bgClassName='p1' strength={-300} bgImage={p1}>
                        <div className="h-[34rem]  "></div>

                    </Parallax >
                    <Parallax bgClassName='p1' strength={-300} bgImage={p1}>
                        <div className="h-[34rem]  "></div>

                    </Parallax >

                </div>
            </div>
        </>
    )
}

export default NewGallery