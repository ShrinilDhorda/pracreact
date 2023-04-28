import React, { useState } from 'react'

const Usestate = () => {
    const [count, setCount] = useState(0)
    const [formdata, setFormdata] = useState({
        name: '',
        mail: '',
        password: '',
        cpassword: '',
    })
    const handleinput = (event) => {
        const name = event.target.name;
        // it takes the name from the input field 
        const value = event.target.value;
        // and grabs the value entered by the user.
        // console.log(name);
        // console.log(value);
        setFormdata((prev) => {
            return { ...prev, [name]: value }
            // to preserve other data fields if not field ....
        })
    }
    return (
        <>

            {/* // usestate hoook */}
            {/* to change the count .... */}
            <div className="flex flex-col items-center justify-center h-screen bg-black w-full">
                <div className="boxx text-white font-bold text-3xl justify-center items-center space-x-8  flex w-1/3">
                    <div onClick={

                        () =>
                        (count === 0 ?
                            setCount(0) :

                            setCount(count - 1)
                        )}
                        className="minus cursor-pointer bg-red-700 w-10 flex justify-center items-center h-10 rounded-full">-</div>
                    <div className="no">{count}
                    </div>
                    <div onClick={() => setCount(count + 1)} className="plus cursor-pointer bg-green-700 w-10 flex justify-center items-center h-10 rounded-full">+</div>
                </div>
            </div >
            <div className="regform h-screen bg-black w-full flex justify-center flex-col  items-center">
                <div className="regbox  flex flex-col space-y-4 w-1/2 py-7 border  items-center justify-center ">
                    <div className="text-gray-200 font-bold text-3xl ">Register Form</div>
                    <div className="name  w-2/3  ">
                        <input onChange={handleinput} value={formdata.name} name='name' type="text" placeholder='Name' className='p-2 placeholder:text-gray-500 border-none bg-gray-800  text-white w-full' />
                    </div>
                    <div className="name w-2/3">
                        <input onChange={handleinput} value={formdata.mail} name='mail' type="email" placeholder='Email' className='p-2 placeholder:text-gray-500 border-none bg-gray-800  text-white w-full' />
                    </div>
                    <div className="name w-2/3">
                        <input onChange={handleinput} value={formdata.password} name='password' type="password" placeholder='Password' className='p-2 placeholder:text-gray-500 border-none bg-gray-800 text-white  w-full' />
                    </div>
                    <div className="name w-2/3">
                        <input onChange={handleinput} value={formdata.cpassword} name='cpassword' type="password" placeholder='Confirm Password' className='p-2 placeholder:text-gray-500 border-none bg-gray-800  text-white w-full' />
                    </div>
                    <button className='px-4 py-2  bg-green-800 text-white font-bold '>Submit</button>
                </div>
                <p className='text-gray-500 text-lg mt-5'>{`My name is ${formdata.name} and my email is ${formdata.mail}`}</p>
            </div>
        </>

    )
}

export default Usestate