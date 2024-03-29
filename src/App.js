
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from "./Components/Login"


function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/checkout' element={<>  <Header /> <Checkout />   </> } >
          
        </Route>
        <Route path='/login' element={<Login /> } >
          
        </Route>
        <Route path='/' element={<><Header /><Home />  </>  } >

        </Route>
          
      </Routes>
    </div>
    </Router>
  );
}

export default App;
