import * as React from "react";
import * as System from "../../design-system";
import { PropertyControls, ControlType } from "framer";

interface Props {
  text: string;
}

export class List extends React.Component<Props> {
  render() {
    return <System.List {...this.props} text={this.props.text} />;
  }
  static propertyControls: PropertyControls<Props> = {
    text: {
      title: "Item Text",
      type: ControlType.String,
      defaultValue: "Item 4"
    }
  };
}
