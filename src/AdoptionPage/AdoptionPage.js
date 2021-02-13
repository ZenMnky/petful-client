import React, { Component } from 'react';
import cuid from 'cuid';
import {PeopleService} from '../Services/peopleService';
import {PetService} from '../Services/petService';
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
            adoptionQueue: [],
            newName: '',
            error: null
        }
           
    };
    

    componentDidMount(){
        this.fetchPets();
        this.fetchPeople();
        this.autoAdopt = setInterval(this.handleAutoAdoption, 5000);

    }

    componentWillUnmount(){
        clearInterval(this.autoAdopt);
    }

    fetchPets(){
        this.setState({
            petLoading: true,
        })
        PetService.get()
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
        PeopleService.get()
            .then(res => res.json())
            .then(data => this.setState({adoptionQueue: data}))
            .catch(error => this.setState({ error }));
    }

    postName(name){
       PeopleService.post(name)
        .catch(error => this.setState({ error }));
    }

    handleSubmit(e){
        // prevent submission
        e.preventDefault();

        // grab the name
        let {newName} = this.state;

        // clear input field
         this.setState({
            newName: ''
         });
        
        // post name to API
        PeopleService.post(newName)
            .catch(error => this.setState({ error }));

        // update local state
        this.state.adoptionQueue.push(newName);
    }

    handleAutoAdoption = () => {
        
        // randomly choose 'cat' or 'dog' for :pet
        let petOption = ['cat', 'dog']

        let selectedPet = petOption[Math.round(Math.random())];

        console.log(`autoAdopt ${selectedPet}`)

        this.removePetAndOwner(selectedPet)

    }

    removePetAndOwner = (petType) => {
        PetService.remove(petType)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    newFam: data
                })
            })
            .then(() => {
                this.fetchPets();
                this.fetchPeople();
            } )
            .catch(error => this.setState({ error }));
    }
       

    nameChanged(value){
        this.setState({
            newName: value
        })
    }
    
    render() {

             
            let dog = this.state.dog;
            let cat = this.state.cat;
            let dogPlaceholder = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartkey.com%2Fmpngs%2Fm%2F5-56136_grayscale-dog-clipart-dog-silhouette-clip-art.png';
            let catPlaceholder = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F60%2FCat_silhouette.svg%2F1920px-Cat_silhouette.svg.png';
            let adoptionQueue = (this.state.adoptionQueue)
                ? this.state.adoptionQueue.map(name => {
                    return <li key={cuid()}>{name}</li>
                    }) 
                : <p>loading...</p>;



        return (
            <div className='flex-container'>
                <h1>Adoption Page</h1>
                <section id='adoption-name-queue'>
                    <h2>Adoption Queue</h2>
                    <ol>
                        {adoptionQueue}
                    </ol>
                </section>
                <section id='adoption-name-queue_add-name'>
                    <form>
                        <input 
                            type='text' 
                            value={this.state.newName}
                            onChange={e => this.nameChanged(e.target.value)}
                            placeholder='add your name to the list' 
                        />
                        <button 
                            type='submit' 
                            onClick={e => this.handleSubmit(e)}
                        >
                            Submit name
                        </button>
                    </form>
                </section>
                <section id='adoption-pet-queue' className='flex-fullscreen-row'>
                    
                        <div id='adoption-pet-queue_dog-container'>
                            <img
                                src={(dog.imageURL)? dog.imageURL : dogPlaceholder} 
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
                   
                    
                    <div id='adoption-pet-queue_cat-container'>
                        <img
                            src={(cat.imageURL) ? cat.imageURL : catPlaceholder}  
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



