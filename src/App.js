
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './Components/Header';


function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/checkout' element={'' } >
          
        </Route>
        <Route path='/login' element={'' } >
          
        </Route>
        <Route path='/' element={<Header /> } >
        
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
