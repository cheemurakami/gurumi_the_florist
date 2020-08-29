import React, { useEffect, useState } from "react";
import * as a from "../actions";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

function FavoriteList(props) {
  const [flowers, setFlowers] = useState([]);
  const { dispatch } = props;

  useEffect(() => {
    fetch("/api/favorites")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        setFlowers(jsonifiedResponse)
        // const action = a.loadedFavFlowers(jsonifiedResponse);
        // dispatch(action);
      });
    return () => {};
  }, []);

  const showFavorites = () => {
    return (
      <React.Fragment>
        {flowers &&
          flowers.map((flower) => {
            <div key={flower.id}>
              <h1>{flower.title}</h1>
            </div>;
          })}
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      
      {flowers && flowers.map((flower) => {
        return(
          <div key={flower.id}>{flower.title}</div>
        )
      })}

     
      {/* {props.flowers && props.flowers.map((flower) => {
       <div key={flower.id}>
         <h1>{flower.title}</h1>
       </div>
     })} */}
    </React.Fragment>
  );
}

//  const mapStateToProps = (state) => {
//    console.log(state.favFlowerListReducer.flowers);
//   return {
//     flowers: state.favFlowerListReducer.flowers,
//   };
// };

// FavoriteList = connect(mapStateToProps)(FavoriteList);

export default FavoriteList;
