import React from "react";
import "./post.styles.scss";
import { Col, Row } from "react-bootstrap";
import InitialsRound from "../InitialsRound/InitialsRound.component";
import { Form } from "react-bootstrap";

const Post = ({ user, date, text }) => (
  <Row className="post-row">
    <Col lg="8" className="post">
      <div style={{ width: "100%", display: "flex", marginBottom: "10px" }}>
        <div style={{ display: "flex" }}>
          <InitialsRound initials="M" />
          <div
            style={{
              margin: "auto 0",
            }}
          >
            <div>{user}</div>
            <div>{date}</div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "left", marginBottom: "10px" }}>{text}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
          padding: "5px 0",
          marginBottom: "10px",
        }}
      >
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>
      </div>
      <div style={{ display: "flex" }}>
        <InitialsRound initials="M" />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={2}
            place
            style={{ width: "100%" }}
          />
        </Form.Group>
      </div>
    </Col>
  </Row>
);

export default Post;
