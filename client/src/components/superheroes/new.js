import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function New (){
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    function handleInputChange(event) {
        event.persist();
        const { name, value } = event.target;

        setInputs(inputs => {
            return {
                ...inputs,
                [name]: value
            };
        });
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/superheroes", {
                realName: inputs.realName,
                superheroName: inputs.superheroName,
                age: inputs.age,
                group: inputs.group
        })
        .then(resp => setRedirect(true))
        .catch(err => console.log(err));
    }

    if(redirect) {return <Redirect to="/" />}

    return(
        <div className="container">
            <header>
                <h1>New Superhero</h1>
            </header>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Real Name</label>
                        <input className="form-control" name="realName" onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Superhero Name</label>
                        <input className="form-control" name="superheroName" required onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input className="form-control" name="age" required onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Superhero Group</label>
                        <select className="form-control" name="group" required onChange={handleInputChange}>
                            <option value="THE DEFENDERS" defaultValue>THE DEFENDERS</option>
                            <option value="X-MEN">X-MEN</option>
                            <option value="FANTASTIC FOUR">FANTASTIC FOUR</option>
                            <option value="X-FORCE">X-FORCE</option>
                            <option value="THE AVENGERS">THE AVENGERS</option>
                            <option value="THE ETERNALS">THE ETERNALS</option>
                            
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default New;