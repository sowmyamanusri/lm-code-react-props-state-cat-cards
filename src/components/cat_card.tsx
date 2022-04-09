import React from "react";

interface catCardProps {
    name: string;
    species: string;
    favFoods:Array<string>;
    birthYear: number;

}


const CatCard : React.FC<catCardProps>  = ({name,species,favFoods,birthYear})=>
    <div className = "card">
        <h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
    </div>

    export default CatCard;