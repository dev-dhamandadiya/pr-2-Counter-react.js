import React, { useEffect, useState } from 'react';
import "./App.css"

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault()
    if (editId) {
      const data = list.map((val) => {
        if (val.id === editId) {
          return { ...val, text: todo }
        }
        return val
      })

      localStorage.setItem(('todo-list'), JSON.stringify(data))
      setList(data);
      setEditId(null);
      setTodo("");

    }
    else {
      const newList = [...list, { id: Date.now(), text: todo }]
      localStorage.setItem(('todo-list'), JSON.stringify(newList));
      setList(newList);
      setTodo("");
    }
  }

  const handleDelete = (id) => {
    let newList = list.filter((val) => val.id != id)


    localStorage.setItem(('todo-list'), JSON.stringify(newList))
    setList(newList);

  }
  const handleEdit = (id) => {
    let data = list.find((val) => val.id === id);
    setTodo(data.text);
    setEditId(id);
  }

  useEffect(() => {
    const oldList = JSON.parse(localStorage.getItem("todo-list"));
    if (oldList) {
      setList(oldList);
    }

  }, []);

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <form action="" method='post' onSubmit={handelSubmit}>
          <div>
            <label htmlFor="text">Task : </label>
            <input type="text" name='text' id='text' onChange={(e) => { setTodo(e.target.value) }} value={todo} />
          </div>
          <br />

          <div>
            <button type='submit' className='submit-btn'>Submit</button>
          </div>
          <br />
        </form>

        <table border={2}>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((value, index) => {
                const { id, text } = value

                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{text}</td>
                      <td>
                        <button type='button' className='delete-btn' onClick={() => handleDelete(id)}>Delete</button>{" "}
                        <button type='button' className='edit-btn' onClick={() => handleEdit(id)}>Edit</button>
                      </td>
                    </tr >
                  </>
                )
              })

            }

          </tbody>
        </table >
      </div>
    </>
  )
}

export default App