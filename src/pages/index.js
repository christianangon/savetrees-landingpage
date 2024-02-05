import React ,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const email = localStorage.getItem('email');

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} isLoggedIn={isLoggedIn}/>
           <Navbar toggle={toggle} isLoggedIn={isLoggedIn}/> 
           <HeroSection isLoggedIn={isLoggedIn} email={email} />
           <InfoSection {...homeObjOne}/>
           <InfoSection {...homeObjTwo}/>
           <Services />
           <InfoSection {...homeObjThree}/>
           <Footer />
           
        </>
    );
};

export default Home;
