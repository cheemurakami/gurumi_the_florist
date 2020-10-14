import React from "react";
import DropIn from "braintree-web-drop-in-react";

class Store extends React.Component {
  instance;

  state = {
    clientToken: null,
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
  }

  render() {
    console.log(this.state.clientToken)
    if (!this.state.clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <DropIn
            options={{ authorization: this.state.clientToken }}
            onInstance={(instance) => (this.instance = instance)}
          />
          <button onClick={this.save.bind(this)}>Save</button>
        </div>
      );
    }
  }
}

export default Store
