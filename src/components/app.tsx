import * as React from "react";

export default class App extends React.Component<any, any> {
  props: any;

  constructor(props: any) {
    super(props);
    this.props = props;
  }

  render() {
    return <h1>Hello from App</h1>;
  }
}
