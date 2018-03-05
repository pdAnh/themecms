import React from "react"
import { Button, Carousel, Row, Col } from "antd"

import Notification from "components/Notification"
import { pageWrapper } from "utils/wrapper"

class Index extends React.Component {
  static async getInitialProps(ctx) {
    // do something in server here!
    const { store } = ctx

    // const sendString = "I Got You in Server! Dont believe? You can view page source and find me there!..."
    // store.dispatch(authGetInfo(sendString))

    return {}
  }

  render() {
    return (
      <div>
        <div className="hero">
          <Carousel>
            <Row>
              <Col span={14}>
                <img src="../static/images/theme.jpg" />
              </Col>
              <Col span={8}>
                <h3>asdasdsa</h3>
                <Button>More Details</Button>
              </Col>
            </Row>

            <div><h3>4</h3></div>
          </Carousel>
        </div>
        <div className="hero">
          <Row className="is-padding-50">
            <Col span={12}>
              <h1>Find the perfect theme for your online store</h1>
              <h3>
                Explore our range of free and paid themes to find the right look and feel for your store.
                Find inspiration, discover styles, and start building your brand.
              </h3>
            </Col>
            
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default pageWrapper(mapStateToProps, null)(Index)