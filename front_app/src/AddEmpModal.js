import { Component } from "react"
import {Modal, Button, Row, Col, Form, FormGroup, FormLabel, FormControl, ModalFooter} from 'react-bootstrap'


export class AddEmpModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'employee',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //EmpartmentId:null,
                EmployeeName: event.target.EmployeeName.value
            })
        })
        .then(res => res.json())
        .then((result)=>{
            alert(result);
            this.props.onHide();
        },
        (error)=>{
            alert('Failed');
        })

    }
            
    render(){
        return(
            <div>
                <Modal
                {...this.props}
                size = "lg"
                aria-labelledby="conteined-modal-title-vcenter"
                centered
                >  
                    <Modal.Header closeButton>
                        <Modal.Title id="conteined-modal-title-vcenter">
                            Add Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit = {this.handleSubmit}>
                                    <FormGroup controlId="EmployeeName">
                                        <FormLabel>EmployeeName</FormLabel>
                                        <FormControl type="text" name="EmployeeName" required
                                        placeholder="EmployeeName"/>                                        
                                    </FormGroup>
                                    <FormGroup>
                                        <Button variant="primary" type="submit">
                                            Add Employee
                                        </Button>
                                    </FormGroup>
                                </Form>                                    
                            </Col>
                        </Row>
                    </Modal.Body>

                    <ModalFooter>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </ModalFooter>
                    
                </Modal>
            </div>
        )
    }    

}