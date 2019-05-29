import * as React from "react";
import * as System from "../../design-system";
import { ControlType, PropertyControls } from "framer";

type Props = System.InputProps & {
  width: number;
  height: number;
};

export class Input extends React.Component<Props> {
  render() {
    return <System.Input {...this.props} />;
  }

  static defaultProps: Props = {
    width: 150,
    height: 50
  };

  static propertyControls: PropertyControls<Props> = {
    value: { title: "Value", type: ControlType.String },
    placeholder: { title: "Placeholder", type: ControlType.String },
    disabled: { title: "Disabled", type: ControlType.Boolean },
    error: { title: "Error", type: ControlType.Boolean }
  };
}
