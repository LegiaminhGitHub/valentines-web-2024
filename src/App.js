import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Main_page from "./main-page";
import Thank_you from './thank_you';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main_page/>}></Route>
          <Route path="/thanks" element={<Thank_you/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
