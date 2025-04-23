import { Home } from "./components/Home"
import { Sobre } from "./components/Sobre"
import { Navbar } from "./components/Navbar"
import { Caracteristicas } from "./components/Caracteristicas"
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Home/>
      <Sobre/>
      <Caracteristicas/>
    </main>
  )
}

export default App
