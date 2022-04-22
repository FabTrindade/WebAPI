import { Component } from "react"
import {Modal, Button, Row, Col, Form,  ModalFooter} from 'react-bootstrap'


export class EditDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'department',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentId:event.target.DepartmentId.value,
                DepartmentName: event.target.DepartmentName.value
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
                            Edit Department
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit = {this.handleSubmit}>
                                    <Form.Group controlId="DepartmentId">
                                        <Form.Label>DepartmentId</Form.Label>
                                        <Form.Control type="text" name="DepartmentId" required
                                        disabled
                                        defaultValue={this.props.depid}
                                        placeholder="DepartmentId"/>                                        
                                    </Form.Group>
                                    <Form.Group controlId="DepartmentName">
                                        <Form.Label>DapartmentName</Form.Label>
                                        <Form.Control type="text" name="DepartmentName" required
                                        defaultValue={this.props.depname}
                                        placeholder="DepartmentName"/>                                        
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Udate Department
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