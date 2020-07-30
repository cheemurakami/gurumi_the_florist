import React from "react";
import { Container, Media } from "react-bootstrap";
import ommaFlower1 from "./images/OmmaFlower1.JPG";
import ommaFlower2 from "./images/OmmaFlower2.JPG";
import cheeOmma from "./images/CheeOmma.JPG";

function AboutUs() {
  return (
    <React.Fragment>
      <Container>
        <Media className="mt-5 mb-5">
          <img
            width={300}
            height={300}
            className="mr-3"
            src={ommaFlower1}
            alt="Omma Flower 1"
          />
          <Media.Body className="mt-5">
            <h4>Welcome to Gurumi The Florist!</h4>
            <hr />
            <p>
              I made this website for my Omma. ("Omma" means "mom" in Korean) She is my best friend, my ex coworker, and an amazing florist who loves her cat Gurumi!
              <br />
              Her dream is to open her own flower shop, so I decided to make one for her in my capstone project. 
            </p>
          </Media.Body>
        </Media>

        <Media className="mb-5">
          <Media.Body className="mt-5">
          <h4>Welcome to Gurumi The Florist!</h4>
            <hr />
            <p>
              I made this website for my Omma. ("Omma" means "mom" in Korean) She is my best friend, my ex coworker, and an amazing florist who loves her cat Gurumi!
              <br />
              Her dream is to open her own flower shop, so I decided to make one for her in my capstone project. 
            </p>
          </Media.Body>
          <img
            width={300}
            height={300}
            className="ml-3"
            src={ommaFlower2}
            alt="Omma Flower 2"
          />
        </Media>

        <Media className="mb-5">
          <img
            width={300}
            height={300}
            className="mr-3"
            src={cheeOmma}
            alt="Chee and Omma"
          />
          <Media.Body className="mt-5">
            <h4>Welcome to Gurumi The Florist!</h4>
            <hr />
            <p>
              I made this website for my Omma. ("Omma" means "mom" in Korean) She is my best friend, my ex coworker, and an amazing florist who loves her cat Gurumi!
              <br />
              Her dream is to open her own flower shop, so I decided to make one for her in my capstone project. 
            </p>
          </Media.Body>
        </Media>
      </Container>
    </React.Fragment>
  );
}

export default AboutUs;
