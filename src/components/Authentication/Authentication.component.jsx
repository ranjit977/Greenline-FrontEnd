import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InitialsRound from "../InitialsRound/InitialsRound.component";
import "./Authentication.styles.scss";

const Authentication = () => {
  const [name, setName] = useState("Cameron");
  return (
    <Row className="authentication" noGutters>
      <div className="authentication--avatar">
        <InitialsRound initials="CM" />
      </div>
      <div>
        <div>Hi, {name}</div>
        <Link>Log out</Link>
      </div>
    </Row>
  );
};

export default Authentication;
