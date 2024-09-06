import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import img from '../Assests/secure.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Bg from '../Assests/bg.jpg';


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="relative overflow-x-hidden w-full h-screen bg-cover bg-center" style={{ backgroundImage:` url(${Bg})`}} id='container'>
            <Navbar />
            <div className='flex  items-center justify-center h-full text-center px-4 md:px-20 py-10 bg-black bg-opacity-50'>
                <div data-aos="fade-left" className='text-white font-semibold text-2xl md:text-4xl'>
                    <h1 className='text-3xl md:text-5xl mb-4'>Welcome to Privio</h1>
                    <p className='text-lg md:text-xl'>
                        Privio is designed to safeguard sensitive personally identifiable information (PII) embedded within documents. It automatically identifies and alerts users to the presence of PII, ensuring compliance with data protection regulations such as GDPR, HIPAA, and CCPA.
                    </p>
                </div>
                <div className='mt-8'>
                    <img src={img} alt='image' className='w-full md:w-1/2 rounded-lg shadow-lg' />
                </div>
            </div>
        </div>


    )
}

export default Home
