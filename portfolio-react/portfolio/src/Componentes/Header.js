import React from 'react';
import '../Componentes/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <header>
        <nav className="container-menu">
          <ul className="menu">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
          </ul>
        </nav>
        </header>
      </div>
    )
  }
}

export default Header;
