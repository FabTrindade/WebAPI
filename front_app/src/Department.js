import React, {Component} from "react";
import {Table} from "react-bootstrap"

export class Department extends Component{
    constructor(props){
        super(props);
        this.state = {
            deps:[], 
            error: null,
        }
    }
    
    refreshList(){
        fetch(process.env.REACT_APP_API + 'department')
        .then(response => response.json())
        .then(data => {
            this.setState({deps:data});
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

    render (){
        const {deps}=this.state;
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
                            <th>DepartmentId</th>
                            <th>DepartmentName</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.DepartmentId}>
                                <td>{dep.DepartmentId}</td>
                                <td>{dep.DepartmentName}</td>
                                <td>Edit / Delete</td>
                            </tr>)}
                    </tbody>
                </Table>   
            </div>
        ) 
    }
}

