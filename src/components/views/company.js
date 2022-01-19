import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Company = () => {
    let username;
let age;
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        
      }
      const successfull = (event) => {
        setTimeout(function () {
          document.getElementById("editbtn-1").value = "refered";
        console.log(document.getElementById("editbtn-1").value)
        alert("successfully selected sent offer letter !! network recieved the bounty too");
      }, 7000);
       
        
      }
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">Create contract</h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">
                  </p>
               
                    <h2 className="text-left">Create a job opening</h2>
                    <form onSubmit={handleSubmit}>
      <label>Enter position:
      <input 
        type="text" 
        name="username" 
        value={username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter requirement:
      <input 
        type="text" 
        name="username" 
        value={username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter salary:
      <input 
        type="text" 
        name="username" 
        value={username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter Bounty:
        <input 
          type="number" 
          name="age" 
          value={age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>

    <h2>running postings:</h2>
    <h3>dataanlyst </h3>
    <table>
  <tr>
    <th>name          </th>
    <th>handle</th>
    <th> status</th>
  </tr>
  <tr>
    <td>jacob</td>
    <td>@Tobias</td>
   
    <td><button onClick={successfull} id ="editbtn-1" class="editbtn-1">select</button></td>
   
  </tr>
  <tr>
    <td>Tobias</td>
    <td>@xl</td>

    <td><button class="editbtn">select</button></td>
    
  </tr>
  <tr>
    <td>zshish</td>
    <td>@terminal</td>

    <td><button class="editbtn">select</button></td>
   
  </tr>
</table>
                
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default Company;