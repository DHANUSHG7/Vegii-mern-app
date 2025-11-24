import Blog from './Components/Blog/Blog';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import { Route,Routes } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
