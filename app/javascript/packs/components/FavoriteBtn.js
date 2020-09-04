import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function FavoriteBtn(props) {
  const data = { flower_id: props.flowerId };
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSigninMsg, setShowSigninMsg] = useState(false);

  useEffect(() => {
    setIsFavorite(props.isFavorite);
    return () => {};
  }, [props.isFavorite]);

  const toggleFavorite = () => {
    if (!props.currentUser) {
      setShowSigninMsg(true);
    } else {
      fetch("/api/toggle_favorite", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.msg === "Favorited") {
            setIsFavorite(true);
          } else {
            setIsFavorite(false);
          }
        });
    }
  };

  const favoriteBtnText = () => {
    if (isFavorite) {
      return "Unfavorite";
    } else {
      return "Add favorite";
    }
  };

  const msgOrBtn = () => {
    if (showSigninMsg) {
      return (
        <div style={{ textAlign: "center", margin: "auto" }}>
          <Link to="/users/log_in">
            <div className="btn-container">
              <Button variant="outline-secondary" className="btn mb-3">
                Please Sign In
              </Button>
            </div>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="btn-container">
          <Button
            variant="outline-secondary"
            className="mb-2"
            onClick={toggleFavorite}
          >
            {favoriteBtnText()}
          </Button>
        </div>
      );
    }
  };

  return msgOrBtn();
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
  };
};

FavoriteBtn = connect(mapStateToProps)(FavoriteBtn);
export default FavoriteBtn;
