import React,{Component} from 'react';
import "./../taskItem.css";
import Button from '@mui/material/Button';
export default class TaskItem extends Component{
    constructor(props){
        super(props);
        this.state={task:this.props.taskItem.taskName};
        // this.state={task:this.props.taskItem.taskName,isEditing:false};
        this.toggleTask=this.toggleTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.setIsEditing=this.setIsEditing.bind(this);
    }
    toggleTask(){
        this.props.toggleTask(this.props.id);
    }
    deleteTask(){
        this.props.deleteTask(this.props.id);
    }
    handleChange(evt){
        this.setState({task:evt.target.value});
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.editTask(this.props.id,this.state.task);
        this.setIsEditing(false);
    }
 
     render(){
            
        let result;
                if(this.props.taskItem.isCompleted){
                    result=(
                        <div className='task-item'>
                            <span className='task-list-title'>{this.props.taskItem.taskName}</span>
                            <Button className='completed' variant="contained" onClick={this.toggleTask}>Completed</Button>
                            <Button className='delete' variant="contained" onClick={this.deleteTask}>Delete</Button>
                        </div>
                    );
                }
                else{
                    result=(
                        <div className='task-item'>
                            <span className='task-list-title'>{this.props.taskItem.taskName}</span>
                            <Button className='incomplete'  variant="contained" onClick={this.toggleTask}>Incomplete</Button>
                            <Button className='delete' variant="contained" onClick={this.deleteTask}>Delete</Button>
                        </div>
                    );
                }

            return result;
    }
}
  