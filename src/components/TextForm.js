import React, { useState } from 'react'
// USE STATE HOOK EXPLAINED
// text ek var hai, uska default value hai 'enter text here' here 
// jab bhi mein text ko update karunga , to setText se update karunga
// without using class , use hooks

export default function TextForm(props) {
    const handleClickUp = () => {
        // console.log("uppercase click hua")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleClickLo = () => {
        // console.log("uppercase click hua")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {

        setText(event.target.value)
    }
    const handleClickCl = (event) => {

        setText("")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const [text, setText] = useState('')
    // text='dokoekvv' wrong
    // kuch bhi input daal sakte ho in useState
    // you cant update the var as usual as is,
    // you have to use func of setVar to change it--->
    // setText("sjfijfioj") right
    const handleCopy = () => {
        // console.log("Copied")
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    return (
        <>
            <div className="w-full  mx-auto px-10 ">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className='text-3xl text-gray-600 '>{props.heading} </h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TextArea">

                        </label>
                        <textarea id='myBox' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-blue-600/30 focus:shadow-outline" type="text" placeholder=""
                            rows={9} value={text}
                            onChange={handleOnChange}
                        />

                    </div>

                    <div className="flex items-center justify-start space-x-2">
                        <button onClick={handleClickUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Convert to uppercase
                        </button>
                        <button onClick={handleClickLo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Convert to lowercase
                        </button>
                        <button onClick={handleClickCl} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Clear Text
                        </button>
                        <button onClick={handleCopy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Copy All
                        </button>
                        <button onClick={handleExtraSpaces} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Remove Extra Spaces
                        </button>
                    </div>
                </form>

            </div>
            <div className="flex flex-col items-center  w-full my-2 space-y-2 ">

                <h1 className='text-gray-600 text-xl font-semibold'>Your text summary:
                </h1>
                <p className='text-xl font-bold'>{text.split(" ").length} words, {text.length} characters
                </p>
                <p className='font-semibold text-lg'>{0.008 * text.split(" ").length}  minutes will take to read this</p>
                <h2 className='text-2xl text-gray-700'>Preview here</h2>
                <p className='px-10 text-justify text-gray-500'>{text}</p>
            </div>
        </>
    )
}
