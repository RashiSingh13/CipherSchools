// import { Component } from "react";

import {useContext} from "react";
import Task from "../Components/task";
import AddTask from "../Components/AddTask";
import TaskContext from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";

// class ToDoScreen extends Component {

//     state = {
//         taskCount: 0,
//     }

//     render () {
//         return  (
//             <div className="screen">
//         <h1 className="ui heading center">To Do List </h1>
//         <div>
//             <button 
//                 onClick={ ( e ) =>{
//                 this.setState({ 
//                     ...this.state, 
//                     taskCount: this.state.taskCount +1,
//                 });
               
//                 console.log( this.state.taskCount);
//             }
//             } className="ui secondary button">Add Task</button>
//             <p>
//                 The number of tasks are: {this.state.taskCount }</p>

    
//         </div>
//         </div>
//         );
//     }
// }


//functional component
const ToDoScreen = () =>{

    const {taskList}= useContext( TaskContext );
 const navigate = useNavigate();
    return  (
                   
                   <>
                   <div className="screen">
                <h1 className="ui heading center">To Do List </h1>
                <div>
                    <button 
                        onClick={ ( e ) =>{
                      navigate("/add-task");
                    }
                    } className="ui secondary button">Add Task</button>

                    <section>

                    <div className="ui cards">
                    { taskList.map ( (task) =>(
                <Task task={task} key={ task.taskId} />
                    ))}     
                    </div>
                    </section>
                </div>
                {/* <AddTask onSubmit={addNewTask}/> */}
                </div>
        </>
                );
};
export default ToDoScreen;