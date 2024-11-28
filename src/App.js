//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner';
import { Skillls } from './components/Skillls';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skillls/>
     <Projects/>
    </div>
  );
}

export default App;
