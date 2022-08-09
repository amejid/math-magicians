import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
