import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Service from './components/Service';
import Skills from './components/Skills';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Achievement from './components/Achievement/Achievement'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='about' element={<About></About>}></Route>
          <Route exact path='/service' element={<Service></Service>}></Route>
          <Route exact path='/contact' element={<Contact></Contact>}></Route>
          <Route exact path='/skills' element={<Skills></Skills>}></Route>
          <Route exact path='/projects' element={<Projects></Projects>}></Route>
          <Route exact path='/achievement' element={<Achievement/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
