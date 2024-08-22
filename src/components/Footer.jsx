import React from 'react';

function Footer() {
    return (
        <footer className='w-full h-[10vh] text-white flex flex-col sm:flex-row sm:flex-wrap sm:justify-around justify-center items-center bg-custom-gradient pb-4'>
            <p className='text-xl sm:text-xl'>© 2023. All rights reserved.</p>
            <a className='text-white text-xl sm:text-xl' href="https://www.linkedin.com/in/luz-mieres-617300324/">Linkedin: Luz Mieres</a>
            <p className='text-xl sm:text-xl'>MindHub - CoHort 55</p>
            <div className='flex flex-wrap gap-2'>
                <a href="https://www.facebook.com/"><img className='w-10 h-10 sm:w-10 sm:h-10' src="/src/assets/images/logo-facebook.jpeg" alt="logo facebook" /></a>
                <a href="https://www.instagram.com/"><img className='w-10 h-10 sm:w-10 sm:h-10' src="/src/assets/images/logo-instagram.jpeg" alt="logo instagram" /></a>
                <a href="https://www.whatsapp.com/"><img className='w-10 h-10 sm:w-10 sm:h-10' src="/src/assets/images/logo-whatsapp.png" alt="logo whatsapp" /></a>
            </div>
        </footer>
    );
}

export default Footer;