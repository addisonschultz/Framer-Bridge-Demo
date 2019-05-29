import * as React from "react";
import * as System from "../../design-system";
import { ControlType, PropertyControls } from "framer";

type Props = System.ToggleProps & {
  width: number;
  height: number;
};

export class Toggle extends React.Component<Props> {
  render() {
    return <System.Toggle {...this.props} />;
  }

  static defaultProps: Props = {
    width: 150,
    height: 50
  };

  static propertyControls: PropertyControls<Props> = {
    disabled: { title: "Disabled", type: ControlType.Boolean },
    on: { title: "On", type: ControlType.Boolean }
  };
}
