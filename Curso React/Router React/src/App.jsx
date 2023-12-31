import { Routes, Route, Link, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function App() {
    const query = useQuery()
    
     const chancho = query.get('chanchito')
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
           
            <Route path="/inicio" element={<h1>Inicio</h1>}/>
            <Route path="/perfil" element={<h1>Perfil</h1>}/> 
        </Routes>
      </section>
    </div>
  );
}

export default App;
