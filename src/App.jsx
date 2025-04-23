import { Home } from "./components/Home"
import { Sobre } from "./components/Sobre"
import { Navbar } from "./components/Navbar"
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Home/>
      <Sobre/>
    </main>
  )
}

export default App
