import React, { useContext, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import ConnectWallet from "../reach/ConnectWallet";
import { Context } from "../../Context";
import { AttachButton, DeployButton } from "../reach/DeployAttach";

const Home = () => {

    const [account, , , , ,] = useContext(Context);
    //const [wager, setWager] = useState(0);

    const connectWallet1 = async () => {
       window.location = 'http://localhost:3000/about';
    }
    
    const connectWallet2 = async () => {
        window.location = 'http://localhost:3000/about';
     }

     const connectWallet3 = async () => {
        window.location = 'http://localhost:3000/about';
     }

    return account !== "" ? (
        <Container className="h-100">
            <div className="mt-5">
                <Row>
                    <Col>
                        <Card className="p-3">
                            <Card.Title>Deploy Contract</Card.Title>
                            <hr className="mt-1" />
                            <Card.Text>
                                Deploy your own application
                            </Card.Text>
                        
                            <DeployButton  />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <Card.Title>Attach to Contract</Card.Title>
                            <hr className="mt-1" />
                            <Card.Text>
                                Attach to an already existing application
                            </Card.Text>
                            <AttachButton />
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    ) : (
        <Container className="mt-5">
            <div>
            <h1>Ecosystem for Professionals to connect </h1><br></br>
            <h2>DEVO: Login As:  </h2>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div class="btn-toolbar text-center well">
    <button onClick={connectWallet1} type="button" class="btn btn-primary btn-color btn-bg-color btn-lg col-xs-4 row-xs-4">
      <span class="glyphicon glyphicon-plus w-100" aria-hidden="true"></span> COMPANY
    </button>
    <button onClick={connectWallet2} type="button" class="btn btn-primary btn-color btn-bg-color btn-lg col-xs-4">
      <span class="glyphicon glyphicon-edit" aria-hidden="true"></span> LOGIN USER
    </button>
    <button onClick={connectWallet3} type="button" class="btn btn-primary btn-color btn-bg-color btn-lg col-xs-4">
      <span class="glyphicon glyphicon-time" aria-hidden="true"></span> NEW USER
    </button>
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 </div>
        </Container>
    );
}

export default Home;