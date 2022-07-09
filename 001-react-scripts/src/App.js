import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(2);
  const [user, setUser] = useState({ userName: "fawei", age: 25 });

  const addHandler = (event) => {
    setCounter(counter + 1);
  };

  const minusHandler = (event) => {
    setCounter(counter - 1);
  };

  const userHandler = () => {
    /*  Solution 1 : Object.assign （浅复制）

    const newUser = Object.assign({ test: "test" }, user);
    newUser.userName = "fawei assign";
    console.log(newUser); */
    /* Solution 2 : 解构赋值（浅复制） */
    const newUser = { ...user, userName: user.userName + counter };
    setUser(newUser);
  };

  const addHandlerPlus = (event) => {
    /* 测试连点，连点之后只触发了一次 */
    /*     setTimeout(() => {
      setCounter(counter + 1);
      console.log(counter);
    }, 1000); */

    /* 解决方案:回调函数 */

    // setTimeout(() => {
    //   setCounter((previewCounter) => {
    //     console.log(previewCounter);
    //     return previewCounter + 1;
    //   });
    // }, 1000);

    setTimeout(() => {
      setCounter((previewCounter) => previewCounter + 1);
    }, 1000);
  };

  return (
    <div className="container">
      <h1>count:{counter}</h1>
      <p>
        user:{user.userName} - {user.age}
      </p>
      <button className="btn" onClick={minusHandler}>
        -
      </button>
      <button className="btn addBtn" onClick={addHandler}>
        +
      </button>
      <br />
      <button className="btn userBtn" onClick={userHandler}>
        Rename
      </button>
      <br />
      <button className="btn addBtn" onClick={addHandlerPlus}>
        +
      </button>
    </div>
  );
};

export default App;
