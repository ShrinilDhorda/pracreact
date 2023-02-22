import React from 'react'

const Prac1 = () => {
    // const date = new Date().toLocaleDateString();
    // const time = new Date().toLocaleTimeString();

    let cDate = new Date(2023, 2, 2, 15);
    cDate = cDate.getHours();
    let greet = '';
    const css = {};
    if (cDate >= 1 && cDate < 12) {
        greet = 'Good Morning'
        css.color = 'green'
    } else if (cDate >= 12 && cDate < 19) {
        greet = 'Good Afternoon'
        css.color = 'orange'

    }
    else {
        greet = 'Good Night'
        css.color = 'black'

    }
    return (
        <>
            <div className="">

                {/* <p>Current date is= {date}</p>
                <p>Current time is= {time}</p> */}
                <h1 className='text-3xl font-semibold text-center pt-5'>Hello Sir ,<span style={css}>{greet}</span> </h1>
            </div>
        </>
    )
}

export default Prac1