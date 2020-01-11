import React, { Component } from "react";
import { Box, Button } from "grommet";
import { Edit } from "grommet-icons";

export default class SideBarMobile extends Component {
  render() {
    return (
      <Box pad="medium">
        <Button icon={<Edit />} label="Edit" />
      </Box>
    );
  }
}
