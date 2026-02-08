import { NavBar } from "@/layout/NavBar"
import { Hero } from "@/section/Hero"
import { Project } from "./section/Project"
import { Testimonial } from "./section/Testimonial"
import { Contact } from "./section/Contact"
import { Experience } from "./section/Experience"
import { About } from "./section/About"
import { Footer } from "./layout/Footer"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
