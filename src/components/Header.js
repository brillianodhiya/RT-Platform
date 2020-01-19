import React from "react";
import { Header, Heading } from "grommet";

function CustomHeader(props) {
  return (
    <Header>
      <Heading level="2">{props.title}</Heading>
    </Header>
  );
}

export default CustomHeader;
