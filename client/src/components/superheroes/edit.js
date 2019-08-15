import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`/api/superheroes/${props.match.params.id}`)
            .then(result => setInputs(result.data))
            .catch(err => console.error(err));
    }, [props]);

    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/superheroes/update", {
            id: props.match.params.id,
            realName: inputs.realName,
            superheroName: inputs.superheroName,
            age: inputs.age,
            group: inputs.group
        })
            .then(() => setRedirect(true))
            .catch(err => console.error(err));
    }

    function handleInputChange(event) {
        event.persist();
        const { name, value } = event.target;

        setInputs(inputs => {
            inputs[name] = value;
            return inputs;
        });
    }

    if (redirect) return <Redirect to="/" />;

    return (
        <div className="container">
            <header>
                <h1>Edit {inputs.superheroName}</h1>
            </header>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Real Name</label>
                        <input className="form-control" name="realName" onChange={handleInputChange} defaultValue={inputs.realName} />
                    </div>
                    <div className="form-group">
                        <label>Superhero Name</label>
                        <input className="form-control" name="superheroName" required onChange={handleInputChange}  defaultValue={inputs.superheroName}/>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input className="form-control" name="age" required onChange={handleInputChange}  defaultValue={inputs.age}/>
                    </div>
                    <div className="form-group">
                        <label>Superhero Group</label>
                        <select className="form-control" name="group" required onChange={handleInputChange}  defaultValue={inputs.group}>
                            <option value="THE DEFENDERS">THE DEFENDERS</option>
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

export default Edit;