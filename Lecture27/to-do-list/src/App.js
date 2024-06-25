// import { Component } from "react";
import { useContext, useState } from "react";
import AddTask from "./Components/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {TaskProvider} from "./Context/TaskContext";
// import { TaskProvider } from "./Context/TaskContext";

// class App extends Component {
//     render(){
//         return <ToDoScreen />;
//     }
// }


//functional component
const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen />,
    },
    {
        path:"/add-task",
        element: <AddTask  />,
    },
]);
const App = ()=>{
    return (
        <TaskProvider>
    <RouterProvider router={router} />;
    </TaskProvider>
    );

};

export default App;