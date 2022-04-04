import React from 'react';
import Header from '../Componentes/Header';
import '../Pages/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div>
          <h1 id="#habilidades">Habilidade</h1>
          <h1 id="#hobbies">Hobbies</h1>
          <h1 id="#redes-sociais">Redes Sociais</h1>
        </div>
      </div>
    )
  }
}

export default Home;
