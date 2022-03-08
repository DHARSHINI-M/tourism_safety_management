import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    Form,
    InputGroup,
    FormControl,
    Button,
    Alert
  } from "react-bootstrap";
class Login  extends Component {
    constructor(props){
        super(props);
        this.state=this.initialState;
    }
    initialState = {
        email: "",
        password: "",
        error:"",
    };
    credentialChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
      };
    resetLoginForm=()=>{
        this.setState(()=>this.initialState);
    }
    validateUser = () => {
        this.props.setloggedIn(true);
        return this.props.history.push("/home");
        // this.props.authenticateUser(this.state.email, this.state.password)
        //     .then((response) => {
        //         console.log(response.data);
        //         return this.props.history.push("/home");
        //     })
        //     .catch((error) => {
        //         console.log(error.message);
        //         this.resetLoginForm();
        //         this.setState({"error":"Invalid email And Password"})
        //     });
    };
    render() {
      const {email,password,error} =this.state;
    return (
        <div class="sampleimage">
        <div style={{paddingTop:'5rem'}} >
            <Row className="justify-content-md-center" >
                <Col md={5}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Card >
                            <Card.Header>
                                <span className="fa fa-sign-in "> </span> Login
                            </Card.Header>
                            <Card.Body>
                                <Form className="mb-2"> 
                                    <Form.Group as={Col} className="mb-3">
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                            </InputGroup.Text>
                                            <FormControl  required  autoComplete="off" type="text"  name="email" 
                                                    value={email}  onChange={this.credentialChange}
                                                    placeholder="Enter Email Address"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-3">
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <i class="fa fa-lock" aria-hidden="true"></i>
                                            </InputGroup.Text>
                                            <FormControl  required autoComplete="off" type="password"
                                                name="password" value={password} onChange={this.credentialChange}
                                                placeholder="Enter Password"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                <Button size="sm" type="button" variant="success" onClick={this.validateUser}
                                    disabled={this.state.email.length === 0 || this.state.password.length === 0}
                                >
                                    <i class="fas fa-sign-in-alt"></i> Login
                                </Button>{" "}
                                <Button size="sm"  type="button" variant="info" onClick={this.resetLoginForm}
                                    disabled={this.state.email.length === 0 && this.state.password.length === 0 && this.state.error.length===0}
                                >
                                    <i class="fa fa-undo" aria-hidden="true"></i> Reset
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
            </Row>
        </div>
        </div>
    )
  }
}
// const mapStateToProps= state =>{
//     return {
//         auth:state.auth
//     }
// };
// const mapDispatchToProps=dispatch=>{
//     return {
//         authenticateUser:(email,password) => dispatch(authenticateUser(email,password))
//     };
// };
export default  Login;