import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { Todo } from './Todo';
const App = () => {
    const[loader, setLoader] = useState(true);
    const[todo, setTodo] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                setLoader(false);                
                setTodo(data.slice(0,20));
            } catch (error) {
                console.log(error)
            }
        }

        getData();
    })
  
    return(
        <>
            {loader? <Loader /> : <Todo todo={todo}/>}
        </>
    )
}


export default App;
