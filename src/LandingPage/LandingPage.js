import React from 'react'
import { Link } from 'react-router-dom'


export default function LandingPage() {
    return (
        <div>
            <h1>Welcome to FICO Pet Adoption Services</h1>
            <div className='flex-container'>
                <Link to='/adopt'>
                <img 
                    src='https://images.unsplash.com/photo-1601758177266-bc599de87707?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' 
                    alt='heart warming dogs cat and person' 
                />
                </Link>
                
                <article id='adoption-process'>
                    <h3>Adoption Process</h3>
                    <p>Sign up to join the queue and watch as pets are matched with their new owners</p>
                    <p>When your name becomes first in line, it's your turn to pick. We'll show you a cat and a dog that you may choose from.</p>
                    <button><Link to='adopt'>Join the queue and adopt a pet</Link></button>
                </article>
            </div>
        </div>
    )
}
