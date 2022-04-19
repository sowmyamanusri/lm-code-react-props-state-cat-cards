export default interface Dog {
    id ?: string;
    name: string;
    img ?: string;
    altText ?:string
    species: string;
    favFoods: Array<string>;
    birthYear: number;
}
