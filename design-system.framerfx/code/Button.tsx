import * as React from "react";
import * as System from "../../design-system";
import { ControlType, PropertyControls } from "framer";

type Props = System.ButtonProps & {
  width: number;
  height: number;
};

export class Button extends React.Component<Props> {
  render() {
    return <System.Button {...this.props} />;
  }

  static defaultProps: Props = {
    width: 150,
    height: 50
  };

  static propertyControls: PropertyControls<Props> = {
    text: { title: "Text", type: ControlType.String },
    fluid: { title: "Fluid", type: ControlType.Boolean },
    disabled: { title: "Disabled", type: ControlType.Boolean },
    kind: {
      title: "Kind",
      options: ["default", "primary", "danger"],
      optionTitles: ["Default", "Primary", "Danger"],
      type: ControlType.Enum
    },
    theme: {
      title: "Theme",
      type: ControlType.Enum,
      options: ["framer", "system"],
      optionTitles: ["Framer", "System"],
      defaultValue: "system"
    }
  };
}
