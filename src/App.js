import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes'

function App() {
  return (
    <div className='app' >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
