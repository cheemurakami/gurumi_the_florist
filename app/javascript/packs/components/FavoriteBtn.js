import React from "react";
import { Button, ResponsiveEmbed } from "react-bootstrap";


function FavoriteBtn(props) {
  const data = {flower_id: props.flowerId}
  const toggleFavorite = () => {
    fetch("/api/toggle_favorite", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
        },
    })
    .then((response) => console.log(response.json()))
    .then((jsonResponse) => console.log(jsonResponse))
  }

  return (
    <React.Fragment>  
        <Button variant="outline-secondary" onClick={toggleFavorite}>Add to favorites</Button>
    </React.Fragment>
  );
}

export default FavoriteBtn;
