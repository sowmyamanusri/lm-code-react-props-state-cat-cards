import Dog from './dog';
import dog1 from '../assets/images/dog1.jpg';
import dog2 from '../assets/images/dog2.jpg';
import dog3 from '../assets/images/dog3.jpg';
import {v4 as uuidv4} from 'uuid';

const dogs: Array<Dog> = [
	{
		name: 'Floofus',
		img :dog1,
		altText :'cutey Puppy!!',
		species: 'Puppy',
		favFoods: ['marshmallows, biscuit, meat, egg'],
		birthYear: 2020,
	},
	{
		name: 'Doofus',
		img: dog2,
		altText : 'A lovely dog!',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
	},
	{
		name: 'Goofus',
		img: dog3,
		altText: 'A energetic Dog!',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2015,
	},
];

dogs.forEach((dog) => dog.id = uuidv4())
console.log(dogs);

export default dogs;
