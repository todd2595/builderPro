import React from "react";
import { Col, Row, Container } from "../Components/Grid";

function intro() {
    return (
        <Container>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Guess WHAT?</h1>
                    <p class="lead">Select Single or Multiplayer!</p>
                </div>
            </div>
            <Row>
                <Col size="md-12">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Single</button>
                    <button type="button" class="btn btn-secondary btn-lg btn-block">Multiplayer</button>
                </Col>
            </Row>

        </Container>

    );
}

export default intro;