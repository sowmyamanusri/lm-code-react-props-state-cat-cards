import Dog from './dog';
import dog1 from '../assets/images/dog1.jpg';
import dog2 from '../assets/images/dog2.jpg';
import dog3 from '../assets/images/dog3.jpg';
import {v4 as uuidv4} from 'uuid';

const dogs: Array<Dog> = [
	{
		name: 'Floofus',
		image:dog1,
		altText:'A cute puppy!',
		species: 'Puppy',
		favFoods: ['marshmallows'],
		birthYear: 2020,
	},
	{
		name: 'Doofus',
		image:dog2,
		altText: 'A lovely dog!',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
	},
	{
		name: 'Goofus',
		image:dog3,
		altText:'A energetic dog!',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2015,
	},
];

dogs.forEach((dog) => dog.id = uuidv4())
console.log(dogs);

export default dogs;
