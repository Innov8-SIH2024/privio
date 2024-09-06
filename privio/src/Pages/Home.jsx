import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import img from '../Assests/secure.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
<div className="container overflow-x-hidden" id='container'>
    <div>
        <Navbar/>
    </div>
    <div className='pt-20 md:flex justify-between mx-20'data-aos="fade-left" >
        <div>
        <h1>Welcome to Privio</h1>
        <p>Privio is designed to safeguard sensitive personally identifiable information (PII) embedded within documents. It automatically identifies and alerts users to the presence of PII, ensuring compliance with data protection regulations such as GDPR, HIPAA, and CCPA.</p>
        </div>
        <div>
            <img src={img} alt='image'/>
        </div>
    </div>
</div>

  )
}

export default Home
