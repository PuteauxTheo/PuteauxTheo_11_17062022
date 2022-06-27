import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/index.scss';
import './style/header.scss';
import './style/footer.scss'
import './style/components/location.scss'
import './style/components/error404.scss'
import './style/page/home.scss'
import './style/page/about.scss'
import './style/components/infoLogement.scss'
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Footer from './components/Footer';
import FicheLogement from './pages/FicheLogement';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>    
        <Header/>    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/location' element={<FicheLogement/>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer/>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
