import { Component } from "react"
import { Layout, Menu, Icon, Button } from "antd"
import { connect } from "react-redux"
import MenuItem from "antd/lib/menu/MenuItem";


class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'logo'
    };
  }

  render() {
    const { current } = this.state
    return (
      <Layout className="layout">
        <Layout.Header align="middle">
          <Menu
            className="menu"
            mode="horizontal"
            onClick={this.handelClick}
            selectedKeys={[current]}
          >
            <MenuItem className="logo">Webcms</MenuItem>
            <Menu.SubMenu title={<span>COLLECTIONS <Icon type="caret-down" /></span>}>
              <Menu.Item key="setting:1">Trend this week</Menu.Item>
              <Menu.Item key="setting:2">New theme release</Menu.Item>
              <Menu.Item key="setting:3">New theme release</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={<span>INDUSTRIES <Icon type="caret-down" /></span>}>
              <Menu.Item key="setting:1">Trend this week</Menu.Item>
              <Menu.Item key="setting:2">New theme release</Menu.Item>
              <Menu.Item key="setting:3">New theme release</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="alltheme">
              ALL THEME
            </Menu.Item>

            <MenuItem className="right-menu">
              <Button className="btn-signup">Get Started</Button>
            </MenuItem>
            <MenuItem className="right-menu">
              Log in
            </MenuItem>
            <MenuItem className="right-menu">
              <Icon type="search" />Search
            </MenuItem>
          </Menu>
        </Layout.Header>
        <Layout.Content>
          {this.props.children}
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          theme ©2018 Created by cms
        </Layout.Footer>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(MainLayout)