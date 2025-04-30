import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Sobre } from "./components/Sobre";
import { Navbar } from "./components/Navbar";
import { Caracteristicas } from "./components/Caracteristicas";
import { ProjetoAtividade } from './components/ProjetoAtividade';
import { Transparencia } from './components/Transparencia';
import  Voluntario  from './components/Voluntario';
import  {Noticias}  from './components/Noticias';
import { Contato } from './components/Contato';
import {LoginAdmin} from'./components/admin/LoginAdmin'
import {PainelAdmin} from './components/admin/PainelAdmin'
import {PrivateRoute} from './components/admin/PrivateRoute'
import {Doacao} from './components/Doacao'


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={
            <main>
              <Home />
              <Sobre />
              <Caracteristicas />
            </main>
          } />
         
          {/* Rotas públicas */}
          <Route path="/projeto-atividade" element={<ProjetoAtividade />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/seja-voluntario" element={<Voluntario />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/doacao" element={<Doacao />} />

          {/* Rotas administrativas */}
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/admin" element={
            <PrivateRoute>
              <PainelAdmin />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
