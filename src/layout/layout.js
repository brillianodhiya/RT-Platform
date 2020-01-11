import React from "react";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Collapsible,
  ResponsiveContext,
  Layer,
  Clock
} from "grommet";
import { FormClose, Menu, Deploy } from "grommet-icons";
import Routes from "../routes";
import "antd/dist/antd.css";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    },
    colors: {
      // brand: "#228BE6"
    } //rubah default color
  }
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

class Layout extends React.Component {
  state = {
    showSidebar: false
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full themeMode="dark">
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading
                  level="4"
                  margin="none"
                  color="#fff"
                  style={{ display: "inline-flex" }}
                >
                  <Deploy /> &nbsp; RT 20 RW 05 Trenggalek
                </Heading>
                <Clock type="digital" />
                <Button
                  icon={showSidebar ? <FormClose /> : <Menu />}
                  onClick={() => {
                    this.setState(prevState => ({
                      showSidebar: !prevState.showSidebar
                    }));
                  }}
                />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                  <Routes />
                </Box>
                {!showSidebar || size !== "small" ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      SideBar
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Box
                      fill
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                      SideBar
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default Layout;
