import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Noticias from './pages/Noticias';
import Darksouls2 from './pages/Darksouls2';
import Darksouls from './pages/Darksouls';
import Darksouls3 from './pages/Darksouls3';
import Contacto from './pages/Contacto';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import './App.css';


  function App() {
    return (

      <Router>
        <Header></Header>
        <Nav></Nav>
        <Switch>

          <Route path="/" exact component={HomePage} />
          <Route path="/Darksouls3" exact component={Darksouls3}/>
          <Route path="/Noticias" exact component={Noticias} />
          <Route path="/Darksouls" exact component={Darksouls}/>
          <Route path="/Darksouls2" exact component={Darksouls2} />
          <Route path="/Contacto" exact component={Contacto} />
        </Switch>

        <Footer></Footer>

      </Router>





    );
  }

export default App;
