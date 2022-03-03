import  React,{ Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import "./../main.css"

export default class Main extends Component{
    constructor(props){
        super(props);

        this.state={tasks:[]};
        this.createTask=this.createTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.editTask=this.editTask.bind(this);
        this.toggleTask=this.toggleTask.bind(this);
    }



    createTask(task,desc,date){

        //for creating task

        if(task.trim()==""){
            alert("Please enter task title!");
            return;
        }
        if(desc.trim()==""){
            alert("Please enter task description!");
            return;
        }
        if(date.trim()==""){
            alert("Please enter task date!");
            return;
        }

        let newTask={taskName:task.trim(),taskDescription:desc,isCompleted:false,taskDate:date};
        let allTask=[...this.state.tasks,newTask];
        this.setState({tasks:allTask});
    }

    deleteTask(idx){

        //for deleting task

        let allTask=this.state.tasks.filter((i,index)=>index!=idx);
        this.setState({tasks:allTask});

    }

    editTask(index,value){

        //for editing task

        let allTask=[...this.state.tasks];
        allTask[index].taskName=value;
        this.setState({tasks:allTask});




    }

    toggleTask(index){

        //for toggling between completed & incomplete

        let allTask=[...this.state.tasks];
        allTask[index].isCompleted= !allTask[index].isCompleted;
        this.setState({tasks:allTask});




    }

    render(){
        return(
            <div className="container-div">
                <CreateTask createTask={this.createTask}/>
                <TaskList tasks={this.state.tasks} toggleTask={this.toggleTask} editTask={this.editTask} deleteTask={this.deleteTask} />
            </div>
        );
    }
}