import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './components/Registration';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <Registration/>
      <ShowData/>
    </div>
  );
}

export default App;
