import "./App.css"

import React from 'react'
import { Header } from "./components/Header"
import { Banner } from "./components/Banner"
import { Welcome } from "./components/Welcome"
import { Resources } from "./components/Resources"
import { Courses } from "./components/Courses"
import { Work } from "./components/Work"
import { Testimonial } from "./components/Testimonial"
import { Footer } from "./components/Footer"

const App = () => {
  return (
    <div>
    <Header />
    <Banner />
    <Welcome />
    <Resources />
    <Courses />
    <Work />
    <Testimonial />
    <Footer />
    </div>
  )
}

export default App