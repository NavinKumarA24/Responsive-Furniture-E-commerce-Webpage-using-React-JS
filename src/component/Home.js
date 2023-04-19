
import '../App.css';


import Main from '../component/Main'
import Services from '../component/Services';
import About from '../component/About';
import Furniture from '../component/Furniture';
import Projects from '../component/Projects';
import Client from '../component/Client';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Shop from '../component/Shop';


function Home(){
    return(
    <div className="App">
   
      <Main />
      <Services />
      <About />
      <Furniture />
      <Projects />
      <Shop/>
      <Client/>
      <Contact/>
      <Footer/>
    </div>
);
}

export default Home;
