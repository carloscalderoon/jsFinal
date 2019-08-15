import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
    const [superheroes, setSuperheroes] = useState([]);

    useEffect(() => {
        Axios.get("/api/superheroes")
        .then(result => setSuperheroes(result.data))
        .catch(err => console.error(err));
    }, []);

    return(
        <div className="container">
            <header>
                <h1>All Superheroes</h1>
            </header>

            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Real Name</th>
                            <th>Superhero Name</th>
                            <th>Age</th>
                            <th>Group</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {superheroes.map(superhero => (
                            <tr key={superhero._id}>
                                <td><Link to={`/superheroes/${superhero._id}`}>{superhero.realName}</Link></td>
                                <td><Link to={`/superheroes/${superhero._id}`}>{superhero.superheroName}</Link></td>
                                <td><Link to={`/superheroes/${superhero._id}`}>{superhero.age}</Link></td>
                                <td><Link to={`/superheroes/${superhero._id}`}>{superhero.group}</Link></td>

                                <td>
                                    <Link to={`/superheroes/${superhero._id}/edit`}>Edit</Link> 
                                </td>
                                <td>
                                    <Link to={`/superheroes/${superhero._id}/destroy`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Index;