import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Prac from './Prac';
// import Home from './Home';
import Prac1 from './Prac1';
import Prac2 from './Prac2';
import Spotify from './Spotify';

import TailwindPrac from './TailwindPrac';
{/* props kya hai-properties hai ..... */ }
function App() {
  // const name = 'Shrinil'
  // const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='about' element={<About/> }/>

        </Routes>
      </BrowserRouter> */}
      {/* only import components or pages only here */}
      {/* props here,the TITLE here,nav */}
      {/* this is a component with the properties which it needs to render....... */}
      {/* <Navbar title='hi' mode={darkMode} /> */}
      {/* <TextForm heading='Enter the text to analyse' /> */}
      {/* <About /> */}
      {/* <TailwindPrac /> */}
      {/* <div className="h-screen">

        <Spotify />
      </div> */}
      <div className="h-screen">

        <Prac />
      </div>
      {/* <div className="">

        <Prac2 />
      </div> */}
      {/* <Prac1 /> */}

      {/* this is the url path generated */}
    </>
  );
}



export default App;