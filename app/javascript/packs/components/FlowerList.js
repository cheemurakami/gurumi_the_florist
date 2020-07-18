import React, { useEffect, useState } from "react";
import Media from "react-bootstrap/Media";
import { Link, useHistory } from "react-router-dom";

function FlowerList() {
  const history = useHistory();

  const handleClick = (id) => {
    console.log("clicked");
    history.push(`/flower/${id}`);
  };

  const [flowers, setFlowers] = useState([]);

  //This is what we want to happen when first loaded
  useEffect(() => {
    fetch("/flowers/")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setFlowers(jsonifiedResponse);
      });
    // get all flowers
    // then set all flowers to my state
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <p>hello this is flower list</p>

      <h2 className="text-center">Welcome</h2>

      <ul className="list-unstyled">
        {flowers.map((flower) => (
          <Media as="li" onClick={() => handleClick(flower.id)}>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://i.pinimg.com/originals/14/8f/ab/148fabbf4815332640221127e8715bf7.png"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>{flower.title}</h5>
              <p>{flower.description}</p>
            </Media.Body>
          </Media>
        ))}
      </ul>

      <Link to="/newflowers">
        <button>Add a new flower to the list</button>
      </Link>
    </React.Fragment>
  );
}

export default FlowerList;
