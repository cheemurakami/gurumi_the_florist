import React, { useEffect, useState } from "react";
import Media from "react-bootstrap/Media";
import {Link, useParams, useLocation} from "react-router-dom";


function FlowerDetail() {
  const { id } = useParams();
  const [flower, setFlower] = useState({});
  const location = useLocation();

  function deleteHandler(event){
    event.preventDefault();
    fetch(`/api/flowers/${id}`, {
      method: "DELETE",
    }).then((response) => response.json())
      .then((responseData) => {
        console.log("Success:", responseData);
      });
  }
  
  useEffect(() => {
    fetch(`/api/flowers/${id}`)
      .then((response) => 
        response.json()
      )
      .then((jsonifiedResponse) => {
        setFlower(jsonifiedResponse);
      });
      return () => {};
  }, []);

  return (
    <React.Fragment>
      <p>this is detail page</p>

      <ul className="list-unstyled">
        <Media as="li">
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
            <p>Price: {flower.price}</p>
          </Media.Body>
        </Media>
      </ul>
      <Link to={`/editflowers/${id}`}>
        <button>Edit this flower</button>
      </Link>  
        <button onClick={deleteHandler}>Delete this flower</button>
      <Link to="/">
        <button>Back to List</button>
      </Link>
    </React.Fragment>
  );
}

export default FlowerDetail;
