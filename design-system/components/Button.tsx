import * as React from "react";
import { theme } from "../theme";
import styled from "styled-components";

// Types
export type Props = {
  /** Optional string that can be used to set the button value */
  text?: string;

  /** Make button grow to 100% */
  fluid?: boolean;

  /** Disable button */
  disabled?: boolean;

  /** Button kind */
  kind?: "default" | "primary" | "danger";

  /** Button theme */
  theme?: "framer" | "system";
};

// Component
export const Button: React.FC<Props> = ({
  text,
  fluid,
  disabled,
  children,
  kind,
  theme
}) => (
  <StyledButton
    className={`${fluid ? "fluid" : ""} ${disabled ? "disabled" : ""} ${
      kind ? kind : ""
    }`}
    theme={theme}
  >
    {text || children}
  </StyledButton>
);

// Styles
const StyledButton = styled.button`
  background: ${props =>
    props.theme == "system" ? theme.color.paneBg : theme.themeColor.paneBg};
  border-radius: 14px;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: ${props =>
    props.theme == "system" ? theme.color.body : theme.themeColor.body};
  font-family: ${theme.font};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.1;
  margin: 0;
  padding: ${theme.space[3]};
  text-align: center;
  &:hover {
    color: ${props =>
      props.theme == "system"
        ? theme.color.bodyLight
        : theme.themeColor.bodyLight};
    transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
      0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  }
  &:active {
    transition: none;
    color: ${props =>
      props.theme == "system"
        ? theme.color.bodyLighter
        : theme.themeColor.bodyLighter};
    background-color: ${theme.color.paneBgDark};
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
  }
  &.fluid {
    width: 100%;
  }
  &.disabled {
    color: ${props =>
      props.theme == "system"
        ? theme.color.bodyLightest
        : theme.themeColor.bodyLightest};
    pointer-events: none;
  }

  /* Primary styles */
  &.primary {
    background: ${props =>
      props.theme == "system" ? theme.color.primary : theme.themeColor.primary};
    color: #fff;
  }
  &.primary:hover {
    color: rgba(255, 255, 255, 0.8);
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.15);
  }
  &.primary:active {
    color: rgba(255, 255, 255, 0.7);
    background: ${props =>
      props.theme == "system"
        ? theme.color.primaryDark
        : theme.themeColor.primaryDark};
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
  }

  /* Danger styles */
  &.danger {
    background: ${props =>
      props.theme == "system" ? theme.color.danger : theme.themeColor.danger};
    color: #fff;
  }
  &.danger:hover {
    color: rgba(255, 255, 255, 0.8);
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.15);
  }
  &.danger:active {
    color: rgba(255, 255, 255, 0.6);
    background: ${props =>
      props.theme == "system"
        ? theme.color.dangerDark
        : theme.themeColor.dangerDark};
    box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
  }
`;
