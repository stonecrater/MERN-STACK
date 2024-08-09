import { BrowserRouter, Routes, Route } from 'react-router-dom';

//page & components
import Home from './pages/Home'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
