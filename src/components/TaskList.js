import React,{Component} from "react";
import TaskItem from "./TaskItem";
import "./../taskList.css"
export default class TaskList extends Component{
    render(){
        return(
            <div id="task-head-div">
                <h1 id="tasklist-heading">Your Tasks</h1>
                <div id="tasklist-div">
                    {this.props.tasks.map((task,index)=>{return <TaskItem taskItem={task} id={index} editTask={this.props.editTask} toggleTask={this.props.toggleTask} deleteTask={this.props.deleteTask}/>})}
                </div>
            </div>
        );
    }
}