import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    // console.log(typeof props.title)

    return (
        // props is a component
        // to use props, type 'props in the function navbar here,then only you may use it in valid way'
        <nav className='flex p-2  items-center  space-x-5'>
            {/* you can use the same nav for diff. websites by just changing the name of the element ...
            this is props ,to import it,
            WRITE props.namegiven in '{}' */}
            <div className="">{props.title}</div>
            {/* here props */}
            <div className="text-2xl text-white font-bold">Shrinil Productions</div>
            <div className="navitems flex space-x-5 font-semibold text-lg text-white" >

                <div className="">Home</div>
                <div className="">Creations</div>
                <div className="">{props.aboutMe}</div>
                <div className="">Contact Me</div>
            </div>
        </nav>
    )
}
// this is obj
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutMe: PropTypes.string
};
// Navbar.defaultProps = {
//     title: "Hi there",
//     aboutMe: "about hai "
// };