import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import  { useState } from 'react';
import Dog from './data/dog';
import Dogs from './data/dog-data';
import DogCard from './components/dog_card';
import DogSubmitForm from './components/dogSubmitForm';
import Cat from './data/cat';
import catData from './data/catData';
import CatCard from './components/cat_card';



function App() {
	// JavaScript code can be inserted here!
	const [dogs,setDogs] = useState<Array<Dog>>(Dogs);
	 const dogCount = dogs.length;
	 const [cats , setCats] = useState<Array<Cat>>(catData);
     const catCount = cats.length;
	return (
		
		<>
		
			<Navbar />
			
			<Header  catCount = {catCount} dogCount ={dogCount} />

			<main>
		    <div className='cards__wrapper'>
			{(cats.map((cat,index) =>{
				 return <CatCard   
				 key ={cat.id}
				 name ={cat.name} 
				 species ={cat.species} 
				 favFoods = {cat.favFoods} 
				 birthYear={cat.birthYear}
				 catIndex ={index} />
			 }))}
            
             {(dogs.map((dog,index) =>{
				 return <DogCard 
				 key ={dog.id}
				 name ={dog.name} 
				 image ={dog.img}
				 altText ={dog.altText}
				 species ={dog.species} 
				 favFoods = {dog.favFoods} 
				 birthYear={dog.birthYear} />
			 }))}
				</div>
			</main>
          <DogSubmitForm/>

			<Footer />
		</>
	);
}

export default App;
