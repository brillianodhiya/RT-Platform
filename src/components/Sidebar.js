import React from "react";
import { Box } from "grommet";
import { Menu, Icon, Modal } from "antd";
import { UserSettings } from "grommet-icons";
import { TwitterPicker } from "react-color";
import RTsetting from "./Rtsetting";

const { SubMenu } = Menu;

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      loginName: "",
      settingAccount: false
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
      <>
        <Modal
          visible={this.state.settingAccount}
          title="Setting Account"
          onCancel={() => this.setState({ settingAccount: false })}
          footer={null}
        >
          <RTsetting />
        </Modal>
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
              <Menu.Item
                key="1"
                onClick={() => this.setState({ settingAccount: true })}
              >
                <span>
                  <UserSettings size="small" style={{ marginRight: "15px" }} />
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
            <SubMenu
              key="usaha"
              title={
                <span>
                  <Icon type="shop" />
                  <span>Usaha di RT</span>
                </span>
              }
            >
              <Menu.Item key="6">Usaha yang Disetujui</Menu.Item>
              <Menu.Item key="7">Setting Usaha</Menu.Item>
            </SubMenu>
            <Menu.Item key="8">
              <span>
                <Icon type="setting" /> Setting RT
              </span>
            </Menu.Item>
          </Menu>
          <TwitterPicker
            triangle="top-right"
            colors={[
              "#b84c00",
              "#2e2e2e",
              "#009e10",
              "#21b047",
              "#003887",
              "#0693E3",
              "#3d3d3d",
              "#EB144C",
              "#580096",
              "#9900EF"
            ]}
            onChange={color => this.props.onChangeColor(color.hex)}
          />
        </Box>
      </>
    );
  }
}

export default Sidebar;
