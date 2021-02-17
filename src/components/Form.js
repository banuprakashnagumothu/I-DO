import React ,{ useState }from 'react';

 function Form() {
     const [formData,setFormData]=useState({});
     function setFormValues(e){
        setFormData({...formData,[e.target.name]:e.target.value});
     }
     const [name,setName]=useState('');
     function inputName(e) {
         setName(e.target.value);
     }
     const [password, setPassword] = useState('');
     function inputPassword(e) {
         setPassword(e.target.value);
     }
     async function sendData() {
         console.log(name, password);
         let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
             method: "POST",
             body:JSON.stringify({name, password})
         });

         console.log(await data.json());

     }
    return(
        <React.Fragment>
        <div className="container">
        <form>
        <div>
        <label htmlFor="inputname">
        Name
        </label>
        <input type="text" name="inputname" onChange = {inputName}/>
        </div>
        <div>
        <label htmlFor="password">
        Password
        </label>
        <input type="password" name="password" onChange = {inputPassword} />
        </div>
        <button onClick= {sendData} type="button">
        Submit
        </button>
        </form>
        </div>
        </React.Fragment>
    )
}

export default Form;