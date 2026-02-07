import { NavBar } from "@/layout/NavBar"
import { Hero } from "@/section/Hero"
import { Project } from "./section/Project"
import { Testemonail } from "./section/Testemonial"
import { Contact } from "./section/Contact"
import { Experience } from "./section/Experience"
import { About } from "./section/About"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Testemonail />
        <Contact />
      </main>
    </div>
  )
}

export default App
