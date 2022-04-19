import React from 'react';

interface DogCardProps{
    id?: string;
    name: string;
    image?: string;
    altText ?: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
}

const DogCard : React.FC<DogCardProps> =({name,image,altText,species,favFoods,birthYear})=>
 <div className ="card">
     <h3 className="card__text card__header">{name}</h3>
     <img className ="card__image" src ={image} alt ={altText}/>
     <p className="card__text">Species:{species}</p> 
     <p className="card__text">FavFoods:{favFoods.join('/')}</p>
     <p className="card__text">BirthYear:{birthYear}</p>
 </div>

export default DogCard;