import React,{Component} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./../createTask.css";


export default class CreateTask extends Component{
    constructor(props){
        super(props);
        this.state={task:"",taskDescription:"",taskDate:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleDateChange=this.handleDateChange.bind(this);
        this.handleDescChange=this.handleDescChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({task:evt.target.value});
    }
    handleDescChange(evt){
        this.setState({taskDescription:evt.target.value});
    }
    handleDateChange(evt){
        this.setState({taskDate:evt.target.value});
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTask(this.state.task,this.state.taskDescription,this.state.taskDate);
        this.setState({task:""});
        this.setState({taskDescription:""});
        this.setState({taskDate:""});

    }

    render(){
        return(
            <div id="create-task-div" >
                <h1 id="create-task-heading">Task Manager</h1>
                <form onSubmit={this.handleSubmit} id="create-task-form">
                    <TextField  
                    className="create-task" 
                    label="Task" 
                    variant="outlined" 
                    type="text" 
                    value={this.state.task} 
                    onChange={this.handleChange} />

                    <TextField multiline 
                    className="create-task-desc" 
                    label="Task Description" 
                    variant="outlined" 
                    type="text" 
                    minRows={4}
                    value={this.state.taskDescription} 
                    onChange={this.handleDescChange}/>
     
                    <TextField
                      className="create-task"
                      label="Task Date"
                      type="date"
                      value={this.state.taskDate}
                      onChange={this.handleDateChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    
                    <Button variant="contained" id="create-task-btn" onClick={this.handleSubmit}>Add Task</Button>
                </form>
            </div>
        );
    }


    
}