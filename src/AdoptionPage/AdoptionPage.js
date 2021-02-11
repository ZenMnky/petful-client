import React, { Component } from 'react'

export default class AdoptionPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
           something: null,
        };
    };
    
    render() {
        return (
            <div className='flex-container'>
                <h1>Adoption Page</h1>
                <section id='adoption-name-queue'>
                    <h2>Adoption Queue</h2>
                    <ol>
                        <li>name</li>
                        <li>name</li>                        
                        <li>name</li>
                        <li>name</li>
                    </ol>
                </section>
                <section id='adoption-pet-queue'>
                    <div id='adoption-pet-queue_dog-container'>
                        <img alt='dog' />
                        <div id='dog-story'>
                            <ul>
                                <li>Name: </li>
                                <li>Gender: </li>
                                <li>Age: </li>
                                <li>Breed: </li>
                                <li>Story: </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id='adoption-pet-queue'>
                    <div id='adoption-pet-queue_cat-container'>
                        <img alt='cat' />
                        <div id='cat-story'>
                            <ul>
                                <li>Name: </li>
                                <li>Gender: </li>
                                <li>Age: </li>
                                <li>Breed: </li>
                                <li>Story: </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}


/**
 * thinking: 
 * what happens when we're routed to the adoption page?
 * send requests to the API 
 * - we need the next pets up for adoption - GET /api/pets?
 * - we need to see the list of names in queue - GET /api/people
 * 
 * UI to display the above
 * UI to add name to list + API POST request to add name
 */



