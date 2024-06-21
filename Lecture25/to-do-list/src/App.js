// import { Component } from "react";
import { useState } from "react";
import AddTask from "./Components/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// class App extends Component {
//     render(){
//         return <ToDoScreen />;
//     }
// }
const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen />,
    },
    {
        path:"/add-task",
        element: <AddTask />,
    },
]);


//functional component
const App = ()=>{
    const [tasks, setTasks] = useState([]);
    return <RouterProvider router={router} />;
};

export default App;