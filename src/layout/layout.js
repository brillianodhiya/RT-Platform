import React from "react";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Collapsible,
  ResponsiveContext,
  Layer,
  Clock,
  Footer,
  Text,
  Anchor
} from "grommet";
import { FormClose, Menu, Deploy } from "grommet-icons";
import Routes from "../routes";
import SidebarContent from "../components/Sidebar";
import SidebarContentMobile from "../components/SideBarMobile";
import "antd/dist/antd.css";

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
  constructor() {
    super();
    this.state = {
      showSidebar: false,
      baseColor: "#228BE6"
    };
  }

  onChangeBaseColor = color => {
    this.setState({
      baseColor: color
    });
  };

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet
        theme={{
          global: {
            font: {
              family: "Roboto",
              size: "18px",
              height: "20px"
            },
            colors: {
              brand: this.state.baseColor
            }
          }
        }}
        full
        plain
      >
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
                      background="light"
                      elevation="small"
                      align="center"
                      fill
                      //   align="center"
                      //   justify="center"
                    >
                      <SidebarContent onChangeColor={this.onChangeBaseColor} />
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
                      //   align="center"
                      //   justify="center"
                    >
                      <SidebarContentMobile />
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
        <Footer pad="small" background="brand">
          <Text>© Copyright by Brilliano</Text>
          <Anchor label="Brilli" href="http://bit.ly/2LZlAUa" />
        </Footer>
      </Grommet>
    );
  }
}

export default Layout;
