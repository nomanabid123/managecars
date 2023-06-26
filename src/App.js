import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "./app/store";
import Routes from './routes/routes'

function App() {
    return (<div className='app'>
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    </div>);
}

export default App;
