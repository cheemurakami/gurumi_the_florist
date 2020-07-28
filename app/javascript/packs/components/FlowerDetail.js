import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import * as a  from "../actions";

function FlowerDetail(props) {
  const { id } = useParams();
  const [flower, setFlower] = useState({});
  const location = useLocation();
  const { dispatch } = props;

  function deleteHandler(event) {
    event.preventDefault();
    fetch(`/api/flowers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseData) => {
        // console.log("Success:", responseData);
        const action = a.deletedFlower();
        dispatch(action)
      });
  }

  useEffect(() => {
    const action = a.loadedForm();
    dispatch(action);
    fetch(`/api/flowers/${id}`)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setFlower(jsonifiedResponse);
        console.log(jsonifiedResponse)
      });
    return () => {};
  }, []);


  const showDeletedMsgOrDetail = () => {
    if (props.showMsg){
      return (
        <React.Fragment>
          <div style={{ textAlign: "center", margin: "auto" }}>
            <p>Successfully Deleted!</p>
            <Link to="/">
              <Button variant="outline-secondary" className="btn">
                Back to List
              </Button>
            </Link>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <Container>
        <Row>
          <Col md={7} style={{ textAlign: "center", padding: "auto" }}>
         
           {flower.flower_photos && flower.flower_photos.map((image) => {
             return (    
               <img 
                 className="mr-3"
                 src={image.url}
                 alt="Generic placeholder"
                 key={image.id}
                 width="300px"
               />
             )
           })} 
           
          </Col>
          <Col
            md={5}
            style={{ textAlign: "center", padding: "auto", margin: "auto" }}
          >
            <h3>{flower.title}</h3>
            <p>{flower.description}</p>
            <p>Price: ${flower.price}</p>

            {editBtnAndDeleteBtn()}

            <Link to="/">
              <Button variant="outline-secondary">Back to List</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      )
    }
  }

  const editBtnAndDeleteBtn = () => {
    if (props.currentUser && props.currentUser.admin) {
      return (
        <React.Fragment>
          <div className='btn-container'>
            <Link to={`/editflowers/${id}`}>
              <Button className="btn" variant="outline-secondary" className="mb-3">
                Edit this flower
              </Button>
            </Link>
          </div>
          <div className='btn-container'>
            <Button variant="outline-secondary" className="mb-3" onClick={deleteHandler}>
              Delete this flower
            </Button>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      {showDeletedMsgOrDetail()}  
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
    showMsg: state.flowerListReducer.showMsg,
  };
};
FlowerDetail = connect(mapStateToProps)(FlowerDetail);
export default FlowerDetail;
