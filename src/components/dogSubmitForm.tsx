 import {useState} from 'react';
 import Dog from '../data/dog';

 const DogSubmitForm: React.FC =()=>{
  const [ state, setState ] = useState<any>({
    name: "",
    species: " ",
    favFoods: [],
    birthYear: 0,
  });
  function handleSubmit(){
    alert(" Dog Information form successfully submitted");
 }
 

  function handleChange(e:any){
    const value = e.target.value;
     setState({...state,[e.target.name]:value})
  }

   return(
    <form className="form__section">
   <h3 className ="form__title">Dog Information Form</h3>
   <div className ="container">
   <label className="form__label">
    Name:
    </label>
    <input
      name = "name"
      value={state.name}
      onChange={handleChange}/>
      </div>
      <div className ="container">
  <label className="form__label">
    Species:
    </label>
    <input
      name ="species"
      value={state.species}
      onChange={handleChange}/>
      </div>
      <div className ="container">
      <label className="form__label">
    FavFoods:
    </label>
    <input
    name = "favFoods"
      value={state.favFoods}
      onChange={handleChange}/>
  </div>
  <div className ="container">
      <label className="form__label">
    BirthYear:
    </label>
    <input
    name="birthYear"
      value={state.birthYear}
      onChange={handleChange}/>
  </div>
 <div className ="container">
  <button type ="submit" className="btn btn-primary" onClick={e =>handleSubmit()}>Submit</button>

  </div>
  

    </form>
    

   )
 }

export default DogSubmitForm;




