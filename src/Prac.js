import React, { useState } from 'react'
const Prac = () => {
   
   
    return (
        <>

            {/* reflecion of an img */}
            <div className="mainc flex justify-center  h-screen items-center bg-black">
                <div className=" cont flex flex-col space-y-6 md:flex-row  md:space-x-8">
                    <img src="https://images.pexels.com/photos/5086477/pexels-photo-5086477.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[370px] h-[270px] object-cover ' alt="" />
                    <img src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[370px] h-[270px] object-cover ' alt="" />
                    <img src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=600" className='w-[370px] h-[270px] object-cover ' alt="" />
                </div>
            </div>
            <div className="h-screen">
             
            </div>

        </>
    )
}

export default Prac