import React from 'react'

type Props = {}

const Todo = (props: any) => {
    // console.log(props)
    return (
        <div className='todoItem'>
            <h3>{props.todo.data.desc}</h3>
            <button className='deleteBtn' onClick={() => props.delete(props.todo.id)}>Delete</button>
        </div>
    )
}

export default Todo