import * as React from "react";
import { theme } from "../theme";
import styled from "styled-components";

export type Props = {
  text: string;
};

export const List: React.FC<Props> = props => {
  return (
    <ListContainer>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>{props.text}</ListItem>
      <ListItem>Item 5</ListItem>
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  padding-left: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 18px;
  padding: ${theme.space[1]};
  font-family: ${theme.font};
  font-weight: 600;
`;
