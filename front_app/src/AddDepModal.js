import { Component } from "react"
import {Modal, Button, Row, Col, Form, FormGroup, FormLabel, FormControl, ModalFooter} from 'react-bootstrap'


export class AddDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'department',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //DepartmentId:null,
                DepartmentName: event.target.DepartmentName.value
            })
        })
        .then(res => res.json())
        .then((result)=>{
            alert(result);
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
                            Add Department
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit = {this.handleSubmit}>
                                    <FormGroup controlId="DepartmentName">
                                        <FormLabel>DapartmentName</FormLabel>
                                        <FormControl type="text" name="DepartmentName" required
                                        placeholder="DepartmentName"/>                                        
                                    </FormGroup>
                                    <FormGroup>
                                        <Button variant="primary" type="submit">
                                            Add Department
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