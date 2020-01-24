import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from "../logo.svg"
import ListaUsuarios from './ListaUsuarios'
import CrearUsuario from './CrearUsuario'
import './App.css';


function App(){
    let estiloLogo= 
    { // Objeto de JS con propiedades CSS
        widtth: "5em",
        height:"5em"
    }
    return (
        <Router>
        <div className="App" >
            <header className="App-header">
                <img src={logo} style={ estiloLogo } className="App-logo" alt="logo" />
                <p>
                   Operaciones CRUD <code> Usuarios </code>
                </p>
            </header>
            <nav>
                <Link to="/" className='navegador'> Listado </Link> 
                <Link to="/registro" className='navegador'> Crear Usuarios </Link>
            </nav>
            <Route path="/" exact component={ListaUsuarios}/>
            <Route path="/registro" exact component={CrearUsuario}/>
        </div>
       </Router>
        
    );
}
export default App