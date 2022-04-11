import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import  { useState } from 'react';
import Dog from './data/dog';
import Dogs from './data/dog-data';
import DogCard from './components/dog_card';



function App() {
	// JavaScript code can be inserted here!
	const [dogs,setDogs] = useState<Array<Dog>>(Dogs);
	 const dogCount = dogs.length;
	 

	return (
		
		<>
		
			<Navbar />
			<Header dogCount ={dogCount} />

			<main>
		    <div className='cards__wrapper'>
             {(dogs.map((dog,index) =>{
				 return <DogCard 
				 key ={dog.id}
				 name ={dog.name} 
				 image ={dog.image}
				 altText ={dog.altText}
				 species ={dog.species} 
				 favFoods = {dog.favFoods} 
				 birthYear={dog.birthYear} />
			 }))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
