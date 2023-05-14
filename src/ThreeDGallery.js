import React from 'react'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
const ThreeDGallery = () => {
    return (
        <>
            <div className=" w-full  ">
                <div className="slider ">
                    <span ><img src={p1} style={{ "--i": 1 ,}} className='' alt="" /></span>
                    <span ><img src={p3} style={{ "--i": 2 ,}} className='' alt="" /></span>                   
                    <span ><img src={p2} style={{ "--i": 3 ,}} className='' alt="" /></span>
                    <span ><img src={p2} style={{ "--i": 4 ,}} className='' alt="" /></span>
                    <span ><img src={p3} style={{ "--i": 5 ,}} className='' alt="" /></span>
                    <span ><img src={p1} style={{ "--i": 6 ,}} className='' alt="" /></span>
                    <span ><img src={p2} style={{ "--i": 7 ,}} className='' alt="" /></span>
                    <span ><img src={p1} style={{ "--i": 8 ,}} className='' alt="" /></span>
                    <span ><img src={p3} style={{ "--i": 9 ,}} className='' alt="" /></span>


                </div>
            </div>
        </>
    )
}

export default ThreeDGallery