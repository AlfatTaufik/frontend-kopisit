import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Layanan from '../components/layanan/Layanan';
import Menu from '../components/menu/Menu';
import Barista from '../components/baristo/Barista';
import Footer from '../components/footer/Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [token, setToken] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    if (token === '' || token === null) {
        navigate('/login');
    }

    return (
        <div>
            <Header />
            <Home />
            <About />
            <Layanan />
            <Menu />
            <Barista />
            <Footer />
        </div>
    )
}

export default HomePage