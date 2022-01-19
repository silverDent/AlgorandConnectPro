import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const newUsers = () => {
    let username;
let age;
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        
      }

    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4"></h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">
                  </p>
               
                    <h2 className="text-left">sing up for new user</h2>
                    <br></br><br></br>
                    <form onSubmit={handleSubmit}>
      <label>Enter Name:
      <input 
        type="text" 
        name="username" 
        value={username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter Experience:
      <input 
        type="text" 
        name="username" 
        value={username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>About you:
      <input 
        type="text" 
        name="username" 
        value={username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>current company:
        <input 
          type="number" 
          name="age" 
          value={age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
                <br></br><br></br>
                <h5>TO DO's : add documents upload and verify into the system too </h5>
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );

}

export default newUsers;