import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='flex-container'>
            <h1><Link to='/'>FICO Pet Adoption</Link></h1>
        </header>
    )
}
