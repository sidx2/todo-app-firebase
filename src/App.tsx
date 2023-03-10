import { useEffect, useState } from "react"
import { collection, getDocs, doc, addDoc, deleteDoc } from 'firebase/firestore/lite';
import { db } from "./firebase";
import Todo from "./components/Todo";
import "./App.css"
function App() {

  const [todos, setTodos] = useState<any[]>([])
  const [todoText, setTodoText] = useState('')
  const [load, setLoad] = useState(true)

  const addTodo = async () => {
    if(todoText.length < 1) return
    setTodoText('')

    const res = await addDoc(collection(db, "todos"), {
      desc: todoText,
      completed: false
    })

    setLoad(!load)
  }

  const deleteTodo = async (todoId: string) => {
    setTodos(todos.filter(todo => todo.id != todoId))
    await deleteDoc(doc(db, "todos", todoId));
  }
  useEffect(() => {
    const getTodos = async () => {
      const todosCol = collection(db, "todos") 
      const todosSnapshot = await getDocs(todosCol)

      const dataArray: any[] = todosSnapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        
        return {data, id}
      })
      setTodos(dataArray)
    }

    getTodos()

    return () => {}
  }, [load])


  return (
    <div className="App">
      <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} required/> 
      <button onClick={addTodo} className="addBtn">ADD TODO</button>
      {todos?.map((todo, i) => (
        <Todo key={i} todo={todo} delete={deleteTodo}/>
      ))}
    </div>
  )
}

export default App
