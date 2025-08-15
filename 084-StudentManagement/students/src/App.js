import classes from "./App.module.css";
import React, { useEffect } from "react";
import StudentList from "./components/student/StudentList";

function App() {
  const [studtents, setStudents] = React.useState([]);

  useEffect(() => {
    fetch("https://localhost:7023/api/student/all")
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log(data);
            setStudents(data.data || []);
          });
        } else {
          console.error("Failed to fetch students");
        }
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div className={classes.App}>
      <StudentList students={studtents}></StudentList>
    </div>
  );
}

export default App;
