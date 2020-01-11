import React from "react";
import { Box } from "grommet";
import { Menu, Icon } from "antd";
import { UserExpert } from "grommet-icons";

const { SubMenu } = Menu;

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      loginName: ""
    };
  }

  handleClick = e => {
    console.log("click ", e);
  };

  handleLogin = () => {
    this.setState({
      loginName: "Imam Mujiono"
    });
  };

  render() {
    return (
      <Box background="white" style={{ paddingTop: "10px" }}>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={["kk", "arisan"]}
          mode="inline"
        >
          {this.state.loginName === "" ? (
            <Menu.Item key="1" onClick={() => this.handleLogin()}>
              <span>
                <Icon type="login" /> Login RT
              </span>
            </Menu.Item>
          ) : (
            <Menu.Item key="1" onClick={() => this.setState({ loginName: "" })}>
              <span>
                <UserExpert size="small" style={{ marginRight: "15px" }} />
                {this.state.loginName}
              </span>
            </Menu.Item>
          )}
          <SubMenu
            key="kk"
            title={
              <span>
                <Icon type="solution" />
                <span>KK (Kartu Keluarga)</span>
              </span>
            }
          >
            <Menu.Item key="2">Pencarian KK</Menu.Item>
            <Menu.Item key="3">Proses KK</Menu.Item>
          </SubMenu>
          <SubMenu
            key="arisan"
            title={
              <span>
                <Icon type="fund" />
                <span>Arisan RT</span>
              </span>
            }
          >
            <Menu.Item key="4">Data Arisan</Menu.Item>
            <Menu.Item key="5">Pencatatan Arisan</Menu.Item>
          </SubMenu>
        </Menu>
      </Box>
    );
  }
}

export default Sidebar;
