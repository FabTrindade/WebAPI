import { Component } from "react"
import {Modal, Button, Row, Col, Form,  ModalFooter} from 'react-bootstrap'


export class EditEmpModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'employee',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeId:event.target.EmployeeId.value,
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
                            Edit Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit = {this.handleSubmit}>
                                    <Form.Group controlId="EmployeeId">
                                        <Form.Label>EmployeeId</Form.Label>
                                        <Form.Control type="text" name="EmployeeId" required
                                        disabled
                                        defaultValue={this.props.empid}
                                        placeholder="EmployeeId"/>                                        
                                    </Form.Group>
                                    <Form.Group controlId="EmployeeName">
                                        <Form.Label>EmployeeName</Form.Label>
                                        <Form.Control type="text" name="EmployeeName" required
                                        defaultValue={this.props.empname}
                                        placeholder="EmployeeName"/>                                        
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Udate Employee
                                        </Button>
                                    </Form.Group>
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