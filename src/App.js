import React, { useState } from "react";
import "./App.css";

const Todo = (props) => {
  return <div className="list">{props.list.todo}</div>;
};

function App() {
  const [lists, setList] = useState([{ id: 0, todo: "react를 배워봅시다" }]);

  const [todo, setTodo] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: lists.length + 1,
      todo: todo,
    };
    if (todo === "") {
      alert("내용을 입력해주세요");
    } else {
      setList([...lists, newTodo]);
      setTodo("");
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className="App">
      <div className="Banner">
        <div className="header">
          <input
            value={todo}
            placeholder="입력해주세요"
            onChange={(event) => setTodo(event.target.value)}
          ></input>
          <button onClick={addTodoHandler}>추가하기</button>
        </div>
        <h1> Todo List </h1>
        <div className="list-container">
          {lists.map((list) => {
            return <Todo list={list} key={list.id} />;
          })}
        </div>
      </div>
    </form>
  );
}

export default App;
