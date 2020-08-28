import React, { useEffect, useState } from 'react'

function FavoriteList(props) {
  const [flowers, setFlowers] = useState([]);

  return (
    <React.Fragment>
      <h4>Your favorites</h4>

      
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    flowers: state.favFlowerListReducer.flowers
  }
}
Favoritelist = connect(mapStateToProps)(FavoriteList);
export default FavoriteList;
