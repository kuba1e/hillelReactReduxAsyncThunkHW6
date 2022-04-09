import React, { Component, Fragment } from "react";
import ErrorIndicator from "../ErrorIndicator";

export default class ErrorBoundry extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    const errorInd = this.state.error ? (
      <ErrorIndicator error={this.state.error.message} />
    ) : null;
    const children = !this.state.error ? this.props.children : null;

    return (
      <Fragment>
        {errorInd}
        {children}
      </Fragment>
    );
  }
}
