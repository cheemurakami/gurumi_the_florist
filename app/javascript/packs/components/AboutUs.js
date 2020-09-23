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
            <h4>Welcome to Gurumi The Florist!!</h4>
            <hr />
            <p>
              All flower bouquets we list on this website are handmade by Omma.
              While fresh flowers are beautiful, you can still enjoy and keep
              them long time by using fake large floral arrangements.
            </p>
          </Media.Body>
        </Media>

        <Media className="mb-5">
          <Media.Body className="mt-5">
            <h4>How to keep fake flowers to last long</h4>
            <hr />
            <p>
              They aren’t real, but it doesn't last forever if you don't take care of them. The lifespan of fake
              flowers may vary depending on where you have them stored in your home.
              <br />
              <br />
              Avoid direct sunlight and dust artificial plants with a feather duster once a week. 
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
            <h4>Thank you for stopping by!</h4>
            <hr />
            <p>
              "Omma" means "mom" in Korean. Omma is Chee's best friend, her
              ex-coworker, and an amazing florist who loves her cat Gurumi!
              Gurumi always annoys Omma while she is making flowers, but they
              still love each other so much!
              <br />
              Omma's dream is to open her own flower shop, so Chee will keep
              working on this website. Wish her luck! (✧ω✧)
            </p>
          </Media.Body>
        </Media>
      </Container>
    </React.Fragment>
  );
}

export default AboutUs;
