import React from 'react'

const PracA = () => {
    return (
        <>
            {/*  5 images, ... */}
            <div className="h-screen bg-black w-full flex justify-center items-center group overflow-x-hidden">
                <div className="h-screen w-1/3  flex justify-center items-center space-x-1">

                    <img src="https://images.pexels.com/photos/12903578/pexels-photo-12903578.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" className='fimg' />
                    <img src="https://images.pexels.com/photos/13915442/pexels-photo-13915442.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" className='fimg' />
                    <img src="https://images.pexels.com/photos/10792402/pexels-photo-10792402.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" className='fimg' />
                    <img src="https://images.pexels.com/photos/14755738/pexels-photo-14755738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" className='fimg' />
                    <img src="https://images.pexels.com/photos/10792402/pexels-photo-10792402.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" className='fimg' />
                    <img src="https://images.pexels.com/photos/10792402/pexels-photo-10792402.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" className='fimg' />
                </div>
            </div>
        </>
    )
}

export default PracA