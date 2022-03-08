import Main from './MainComponents';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div>
        <BrowserRouter>
        <div className="App">
            <Main />
        </div>
        </BrowserRouter>
    </div>
  );

}

export default App;
