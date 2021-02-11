import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <p><Link to='/'>FICO Pet Adoption</Link></p>
            <p>Copyright © 2021 Justin Hager</p>
        </footer>
    )
}
