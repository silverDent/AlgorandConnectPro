import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const users = () => {
   
   const successfull = (event) => {
    setTimeout(function () {
      document.getElementById("editbtn-1").value = "refered";
      console.log(document.getElementById("editbtn-1").value)
      alert("successfully reffered!! amount locked");
  }, 7000);
    
  }
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">Company x hiring</h1>
                    <br></br>
              
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">
                  </p>
               
                    <h2 className="text-left"></h2>
                    <p className="text-left mt-3">
                    ROLE:  company x is hiring for profile of DataAnalyst with 3 years of experience. 
                 </p>
                 <table>
  <tr>
    <th>name          </th>
    <th>handle</th>
    <th> refer</th>
    <th> bid</th>
  </tr>
  <tr>
    <td>jacob</td>
    <td>@Tobias</td>
   
    <td><button onClick={successfull} id ="editbtn-1" class="editbtn-1">refer</button></td>
    <input type = "text" id = "courseName" placeholder= " enter bid"></input>
  </tr>
  <tr>
    <td>Tobias</td>
    <td>@xl</td>

    <td><button class="editbtn">refer</button></td>
    <input type = "text" id = "courseName" placeholder= " enter bid"></input>
  </tr>
  <tr>
    <td>zshish</td>
    <td>@terminal</td>

    <td><button class="editbtn">refer</button></td>
    <input type = "text" id = "courseName" placeholder= " enter bid"></input>
  </tr>
</table>
                </Col>
                <Col xs={2} />
            </Row>
           


        </Container>
    );
}

export default users;