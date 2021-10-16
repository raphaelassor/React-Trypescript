import axios from 'axios';

interface Todo{
  id: number;
  title:string;
  completed:boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

  axios.get(url).then(res=>{
    const {id,title,completed}= res.data as Todo
    // logTodo(id,completed,title) WILL GIVE AN ERROR BECUASE OF TYPE DIFFERENCE! 
    logTodo(id,title,completed)

    
  })

  const logTodo=(id:number,title:string,completed:boolean)=>{
    console.log(id,title,completed)
  }
