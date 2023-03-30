import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import ShowData from './components/ShowData';
import Navber from './components/Navber';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navber/>
        <Routes>
          <Route path='/' Component={Registration}/>
          <Route path='/show-data' Component={ShowData}/>
          <Route path='/login' Component={LoginForm}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
