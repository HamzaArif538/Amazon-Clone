
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/checkout' element={'' } >
          checkout
        </Route>
        <Route path='/login' element={<Login /> } >
          login
        </Route>
        <Route path='/' element={<Home />} >
          
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
