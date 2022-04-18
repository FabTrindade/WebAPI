import React, {Component} from "react";
import {Table} from "react-bootstrap"

export class Department extends Component{
    constructor(props){
        super(props);
        this.state = {deps:[]}
    }
    
    refreshList(){
        fetch(process.env.REACT_APP_API + 'department')
        .then(response => response.json())
        .then(data => {
            this.setSate({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    componentDidUpdate(){
        this.refreshList();
    }

    render (){
        const {deps}=this.state;
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>DepartmentId</tr>
                        <tr>DepartmentName</tr>
                        <tr>Options</tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.DepartmentId }>
                                <td>DepartmentId</td>
                                <td>DepartmentName</td>
                                <td>Edit / Delete</td>
                            </tr>)}
                    </tbody>
                </Table>   
            </div>
        ) 
    }
}

