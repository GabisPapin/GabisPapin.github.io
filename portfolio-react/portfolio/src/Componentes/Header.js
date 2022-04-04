import React from 'react';
import '../Componentes/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <header>
          <h1>Portfólio</h1>
          <h2>Gabriela Papin Silva</h2>
        <nav className="container-menu">
          <ul className="menu">
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#redes-sociais">Redes Sociais</a></li>
          </ul>
        </nav>
        </header>
      </div>
    )
  }
}

export default Header;
