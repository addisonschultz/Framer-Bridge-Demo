import * as React from "react";

export type Props = {
  text: string;
};

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <h1>Item 1</h1>
        <h1>Item 2</h1>
        <h1>Item 3</h1>
      </div>
    );
  }
}
