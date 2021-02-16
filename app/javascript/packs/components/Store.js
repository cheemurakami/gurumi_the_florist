import { Button, Container } from "react-bootstrap";

import DropIn from "braintree-web-drop-in-react";
import React from "react";
import { Redirect } from "react-router-dom";

class Store extends React.Component {
  instance;

  state = {
    clientToken: null,
    savedCC: false,
  };

  async componentDidMount() {
    // Get a client token for authorization from -
    const response = await fetch("api/braintrees/client_token");
    const responseObject = await response.json(); // If returned as JSON string
    this.setState({
      clientToken: responseObject.client_token,
    });
  }

  async save() {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    await fetch(`server.test/purchase/${nonce}`);
    this.setState({
      savedCC: true,
    });
  }

  toReviewOrder = () => {
    if (this.state.savedCC) {
      return <Redirect to="/review_order" />;
    }
  };

  render() {
    if (!this.state.clientToken) {
      return (
        <Container>
          <div>
            <h4>Loading...</h4>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <div>
            <DropIn
              options={{ authorization: this.state.clientToken }}
              onInstance={(instance) => (this.instance = instance)}
            />
            <Button variant="outline-secondary" onClick={this.save.bind(this)}>
              Save
            </Button>
            {this.toReviewOrder()}
          </div>
        </Container>
      );
    }
  }
}

export default Store;
