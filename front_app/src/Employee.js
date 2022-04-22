import React, {Component} from "react";
import {Table} from "react-bootstrap"

import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddEmpModal } from "./AddEmpModal";
import { EditEmpModal } from "./EditEmpModal";

export class Employee extends Component{
    constructor(props){
        super(props);
        this.state = {
            emps:[], 
            error: null,
            addModalShow: false,
            editModalShow: false
        }
    }
    
    refreshList(){
        fetch(process.env.REACT_APP_API + 'employee')
        .then(response => response.json())
        .then(data => {
            this.setState({emps:data});
        })
        .catch(err=>{
            console.log("Server connection error!");
            this.setState({error : err});            
        })
    }

    componentDidMount(){
        this.refreshList();
    }
    
    componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(empid){
        if (window.confirm("Are you sure?")){
            fetch(process.env.REACT_APP_API + 'employee/' + empid,{
                method:'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
        }
    }


    render (){
        const {emps, empid, empname}=this.state;
        let addModalClose=()=>this.setState({addModalShow: false});
        let editModalClose=()=>this.setState({editModalShow: false});

        if (this.state.error)
        return (
            <div>
                <h1>Server connection error</h1>
                <p> Error type: {this.state.error.message} </p>
            </div>
        )

        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp=>
                            <tr key={emp.EmployeeId}>
                                <td>{emp.EmployeeId}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=> this.setState({editModalShow:true, empid:emp.EmployeeId, empname:emp.EmployeeName})}>
                                            Edit
                                        </Button>
                                        <EditEmpModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            empid={empid}
                                            empname={empname}/>                                        
                                    
                                        <Button className="mr-2" variant="danger"
                                        onClick={()=> this.deleteEmp(emp.EmployeeId)}>
                                            Delete
                                        </Button>                                    
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table> 

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick ={()=>this.setState({addModalShow:true})}>
                        Add Employee
                    </Button>

                    <AddEmpModal show={this.state.addModalShow}
                    onHide={addModalClose}>
                    </AddEmpModal>
                </ButtonToolbar>  
            </div>
        ) 
    }
}

