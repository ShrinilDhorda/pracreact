import React, { useState } from 'react'
// use state used here, default value is set to light mode both in btn and mystyle,easily undeerstandable

export default function About() {
    const [myStyle, setMyStyle] = useState(
        {
            color: 'black',
            backgroundColor: "white",
        })
    const [btntext, setBtntext] = useState("Enable Dark mode")
    const toogleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: "white",
                backgroundColor: "black",

            })
            setBtntext("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                // transition:"all",
                // duration:"2s"
            })
            setBtntext("Enable Dark Mode")

        }

    }
    return (
        <>
            <div className="" style={myStyle}>

                {/* <div class="relative mb-3">
                    <h6 class="mb-0">
                        <button
                            class="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
                            data-collapse-target="collapse-1"
                        >
                            <span style={myStyle} >What is Material Tailwind?</span>
                            <i class="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
                            <i class="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
                        </button>
                    </h6>
                    <div
                        data-collapse="collapse-1"
                        class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                        <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                            We're not always in the position that we want to be at. We're constantly
                            growing. We're constantly making mistakes. We're constantly trying to
                            express ourselves and actualize our dreams.
                        </div>
                    </div>
                </div>
                <div class="relative mb-3">
                    <h6 class="mb-0">
                        <button
                            class="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
                            data-collapse-target="collapse-2"
                        >
                            <span style={myStyle}>How to use Material Tailwind?</span>
                            <i class="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
                            <i class="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
                        </button>
                    </h6>
                    <div
                        data-collapse="collapse-2"
                        class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                        <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                            We're not always in the position that we want to be at. We're constantly
                            growing. We're constantly making mistakes. We're constantly trying to
                            express ourselves and actualize our dreams.
                        </div>
                    </div>
                </div> */}
                <div class="relative mb-3">
                    <h6 class="mb-0">
                        <button
                            class="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
                            data-collapse-target="collapse-3"
                        >
                            <span style={myStyle}>What can I do with Material Tailwind?</span>
                            <i class="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
                            <i class="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
                        </button>
                    </h6>

                    <div class="p-4 text-sm leading-normal text-blue-gray-500/80 px-9 text-justify" >
                        We're not always in the position that we want to be at. We're constantly
                        growing. We're constantly making mistakes. We're constantly trying to
                        express ourselves and actualize our dreams. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde facilis hic dolore laborum libero! Quo commodi laboriosam labore, distinctio explicabo quasi nam, harum molestiae suscipit minima itaque dicta corrupti voluptate ea. Laboriosam perspiciatis nam, numquam optio voluptatum nisi nemo esse qui obcaecati non. Quaerat nisi nesciunt, aspernatur quisquam est esse adipisci. Ipsam ullam iste consectetur unde ut cumque non totam. Odit rerum facere maiores, fugiat reiciendis asperiores, voluptatem beatae suscipit voluptatum non fugit neque nihil expedita nulla hic dolorum quam aut recusandae architecto ullam? Cum facere nisi temporibus laboriosam, dicta quod. Consequuntur laborum, sint deserunt enim exercitationem necessitatibus sequi excepturi.
                    </div>
                    <div className="p-3 ">

                        <button onClick={toogleStyle} className='bg-gray-800 rounded py-2 px-4 text-white font-bold'>{btntext}</button>
                    </div>
                </div>
            </div>

        </>
    )
}
