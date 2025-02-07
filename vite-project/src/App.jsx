import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import BackToTopBtn from "./components/BackToTopBtn/BackToTopBtn";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
            
            <Footer />
        </Router>
    );
};

export default App