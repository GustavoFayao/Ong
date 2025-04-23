import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import { useRef } from 'react'
import { Button } from './Button'


const navItems = ['sobre','Projeto/Atividade','Transparencia','Seja Volutário','Noticias','Contato']

export const Navbar = () => {
  
    const navContainerRef = useRef(null)
    
    return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 border-none transition-all duration-700 sm:inset-x-6'>
    <header className='absolute top-1/2 w-full-transalate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>

            <div className=' flex items-center gap-7'>
            <img src="/img/Logo.png" alt="Logo" className="w-14 h-14 object-contain rounded-lg" />


                <Button id='Doe-button' 
                title='Transforme Vidas'
                rightIcon ={<TiLocationArrow/>}
                containerClass='bg-blue-50 md:flex hidden items-center justify-center gap-1 '/>

            </div>
            <div className='flex h-full items-center'>
                <div className='hidden md:block'>
                {navItems.map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`}
                    className='nav-hover-btn'>
                        {item}
                    </a>
                ))}
                </div>
            </div>
        </nav>
    </header>

    </div>
  )
}
