// import { Component } from "react";

import {useState} from "react";
import Task from "../Components/task";
import AddTask from "../Components/AddTask";

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

    const [ taskList, setTaskList] = useState( [ ] );


    return  (
                   
                   <>
                   <div className="screen">
                <h1 className="ui heading center">To Do List </h1>
                <div>
                    <button 
                        onClick={ ( e ) =>{
                       setTaskList ( [ ...taskList,
                        {
                            title: "Go to Gym",
                            description: "Go to gym at 7 in the morning.",
                            createdDate: new Date(),
                        },
                       ]);
                    }
                    } className="ui secondary button">Add Task</button>

                    <section>

                    <div class="ui cards">
                    { taskList.map ( (task, index) =>(
                <Task task={task} kry={ index} />
                    ))}     
                    </div>
                    </section>
                </div>
                <AddTask/>
                </div>
        </>
                );
};
export default ToDoScreen;