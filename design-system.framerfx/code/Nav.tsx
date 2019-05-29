import * as React from "react";
import * as System from "../../design-system";
import { ControlType, PropertyControls } from "framer";

export class Nav extends React.Component {
  render() {
    return <System.Nav {...this.props} />;
  }
}
