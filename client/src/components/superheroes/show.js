import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [superhero, setSuperhero] = useState({});

  useEffect(() => {
    Axios.get(`/api/superheroes/${props.match.params.id}`)
      .then(result => setSuperhero(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{superhero.superheroName}</h1>
      </header>
    <br/>
    <br/>
      <div>
          <h3>Real Name: </h3>
          <h3>{superhero.realName}</h3>
      </div>
      <div>
          <h3>
              Age:
          </h3>
          <h3>
                   {superhero.age}
          </h3>
      </div>
      <div>
          <h3>
              Group:
          </h3>
          <h3>
              {superhero.group}
          </h3>
      </div>
    </div>
  );
}

export default Show;