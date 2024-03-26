import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NewFooter from './components/Footer/NewFooter'
import Welcome from './components/Welcome/Welcome'
import Service from './components/Service/Service';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Achievement from './components/Achievement/Achievement'
import { useEffect, useState } from 'react';
import ProjectsSection from './components/Projects/ProjectsSection';


function App() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 6000)
  }, [])


  return (
    <>
      {
        animate ? <Welcome />
          : <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route exact path='/' element={<Home></Home>}></Route>
              <Route exact path='about' element={<About></About>}></Route>
              <Route exact path='/service' element={<Service></Service>}></Route>
              <Route exact path='/contact' element={<Contact></Contact>}></Route>
              <Route exact path='/skills' element={<Skills></Skills>}></Route>
              <Route exact path='/projects' element={<ProjectsSection/>}></Route>
              <Route exact path='/certifications' element={<Achievement />}></Route>
            </Routes>
            {/* <Footer></Footer> */}
            <NewFooter/>
          </BrowserRouter>
      }

    </>
  );
}

export default App;
