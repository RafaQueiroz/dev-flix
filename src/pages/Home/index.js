import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import dadosiniciais from '../../data/dados_iniciais.json'
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="App" style={{ background: "#141414" }}>
      <Menu/>
      <BannerMain videoTitle="O que faz uma desenvolvedora front-end" 
        videoDescription="Um vídeo sobre frontend" 
        url="https://www.youtube.com/watch?v=ZY3-MFxVdEw"/>

      <Carousel color={dadosiniciais.categorias[0].cor}
        category={dadosiniciais.categorias[0]} 
      />
      <Carousel color={dadosiniciais.categorias[0].cor}
        category={dadosiniciais.categorias[1]} 
      />
      <Carousel color={dadosiniciais.categorias[0].cor}
        category={dadosiniciais.categorias[2]} 
      />
      <Carousel color={dadosiniciais.categorias[0].cor}
        category={dadosiniciais.categorias[3]} 
      />
      <Carousel color={dadosiniciais.categorias[0].cor}
        category={dadosiniciais.categorias[4]} 
      />
      <Carousel color={dadosiniciais.categorias[0].cor}
        category={dadosiniciais.categorias[5]} 
      />
      <Footer/>
    </div>
  );
}

export default Home;