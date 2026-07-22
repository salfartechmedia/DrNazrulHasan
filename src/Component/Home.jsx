import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Specialities from './Specialities.jsx'
import Achievements from './Achievements'
import CTA from './CTA'
import Footer from './Footer.jsx'

const Home = () => {
    return (
        <main className="bg-[#06101F] text-white overflow-x-hidden">

            <Navbar />
            <Hero />
            <About/>
            <Specialities/>
            <Achievements/>
            <CTA/>
            <Footer/>
        </main>
    )
}

export default Home