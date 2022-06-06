import React from 'react';
import Header from '../Componentes/Header';
import '../Pages/Home.css';
import fotoperfil from '../imagens/fotoperfil.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div>
          <div className="container-foto-perfil">
            <img className="imagem-perfil" src={ fotoperfil } alt="foto" />
            <div className="container-text">
              <h2>Gabriela Papin Silva</h2>
              <p>Estudante de Desenvolvimento Web</p>
              <p>São Paulo/ SP</p>
              <p>Olá, este é o meu portfólio! Sinta-se à vontade para conhecer mais sobre mim.</p>
            </div>
          </div>
          <h1 id="#redes-sociais">Redes Sociais</h1>
        </div>
      </div>
    )
  }
}

export default Home;
