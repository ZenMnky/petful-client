import React, { Component } from 'react';
import config from '../config';

const API_BASE = config.API_BASE_ENDPOINT;

export default class AdoptionPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            petLoading: false,
            cat: {
                age: null,
                breed: null,
                description: null,
                gender: null,
                imageURL: null,
                name: null,
                story: null,
            },
            dog: {
                age: null,
                breed: null,
                description: null,
                gender: null,
                imageURL: null,
                name: null,
                story: null,
            },
            adoptionQueue: []
        }
           
    };
    

    componentDidMount(){
        this.fetchPets();
        this.fetchPeople();
    }

    fetchPets(){
        this.setState({
            petLoading: true,
        })
        fetch(`${API_BASE}/pets`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then(res => res.json())
        .then(data => {
            let {cat, dog } = data;
            this.setState({
                petLoading: false,
                dog: dog,
                cat: cat
            })
        })
    }

    fetchPeople(){
        fetch(`${API_BASE}/people`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then(res => res.json())
        .then(data => this.setState({adoptionQueue: data}))
    }
    
    render() {

             
            let dog = this.state.dog;
            let cat = this.state.cat;
            let dogPlaceholder = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartkey.com%2Fmpngs%2Fm%2F5-56136_grayscale-dog-clipart-dog-silhouette-clip-art.png';
            let catPlaceholder = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F60%2FCat_silhouette.svg%2F1920px-Cat_silhouette.svg.png';
            let adoptionQueue = this.state.adoptionQueue.map(name => {
                return <li>{name}</li>
            }) || <p>loading...</p>;



        return (
            <div className='flex-container'>
                <h1>Adoption Page</h1>
                <section id='adoption-name-queue'>
                    <h2>Adoption Queue</h2>
                    <ol>
                        {adoptionQueue}
                    </ol>
                </section>
                <section id='adoption-pet-queue'>
                    <div id='adoption-pet-queue_dog-container'>
                        <img
                            src={dog.imageURL || dogPlaceholder} 
                            alt={`meet the dog called ${dog.name}`} 
                        />
                        <div id='dog-story'>
                            <ul>
                                <li>Name: {dog.name}</li>
                                <li>Gender: {dog.gender} </li>
                                <li>Age: {dog.age}</li>
                                <li>Breed: {dog.breed}</li>
                                <li>Story: {dog.story}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id='adoption-pet-queue'>
                    <div id='adoption-pet-queue_cat-container'>
                        <img
                            src={cat.imageURL || catPlaceholder}  
                            alt={`meet the cat called ${cat.name}`}  
                        />
                        <div id='cat-story'>
                            <ul>
                                <li>Name: {cat.name}</li>
                                <li>Gender: {cat.gender} </li>
                                <li>Age: {cat.age}</li>
                                <li>Breed: {cat.breed}</li>
                                <li>Story: {cat.story}</li>
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



