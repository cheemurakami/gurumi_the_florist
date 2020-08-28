import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function FavoriteBtn(props) {
  const data = {flower_id: props.flowerId}
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(props.isFavorite)
    return () => {
    }
  }, [props.isFavorite])

  const toggleFavorite = () => {
    fetch("/api/toggle_favorite", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
      //console.log(jsonResponse)
      if (jsonResponse.msg === "Favorited"){
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
    )
  }

  const favoriteBtnText = () => {
    if (isFavorite) {
      return "Unfavorite"
    } else {
      return "Add favorite"
    }
  }

  return (
    <React.Fragment>  
        <Button variant="outline-secondary" onClick={toggleFavorite}>{favoriteBtnText()}</Button>
    </React.Fragment>
  );
}

export default FavoriteBtn;
