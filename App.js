import React, { useState } from 'react'
import Form from './Form'
import List from './List'


const App = () => {
    const [todos, setTodos] = useState([
        {
            content: '課題をする'

        },
        {
            content: '洗濯をする'

        },
        {
            content: '電話をする'

        }, {
            content: '寝る'

        },
    ])

    /**
     *  todoに追加する処理
     * @param content {string} todoに追加するテキスト      
     */

    const addTodos = (content) => {
        setTodos([
            ...todos,
            {
                content  //=> content:content
            }
        ])
    }
    return (
        <>
            <h1>TODO APP</h1>
            <Form addTodos={addTodos} />
            <List todos={todos} />
        </>
    )
}

export default App