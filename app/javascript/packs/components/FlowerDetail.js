import React from "react";
import Media from "react-bootstrap/Media";
import {Link, useParams} from "react-router-dom";


function FlowerDetail() {
  const { id } = useParams();

  function deleteHandler(event){
    event.preventDefault();
    fetch(`/flowers/${id}`, {
      method: "DELETE",
    }).then((response) => response.json())
      .then((responseData) => {
        console.log("Success:", responseData);
      });
  }

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
            <h5>flower 1</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
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
