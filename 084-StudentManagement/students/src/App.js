import classes from "./App.module.css";
import React from "react";
import StudentList from "./components/student/StudentList";

const StudentData = [
  {
    id: 1,
    attributes: { name: "孙悟空", age: 20, gender: "男", address: "花果山" },
  },
  {
    id: 2,
    attributes: { name: "猪八戒", age: 22, gender: "男", address: "高老庄" },
  },
  {
    id: 3,
    attributes: { name: "周瑠夏", age: 18, gender: "女", address: "二次元" },
  },
];

function App() {
  const [studtents, setStudents] = React.useState(StudentData);

  return (
    <div className={classes.App}>
      <StudentList students={studtents}></StudentList>
    </div>
  );
}

export default App;
