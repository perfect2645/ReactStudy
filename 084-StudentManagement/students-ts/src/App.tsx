import React, { useEffect, useState } from "react";
import StudentList from "./components/student/StudentList";
import classes from "./App.module.css";

import type {
  StudentInfo,
  StudentAttribute,
  StudentResponse,
} from "./types/Students";

const App = () => {
  const [students, setStudents] = useState<StudentInfo[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("https://localhost:7023/api/student/all");

      if (!response.ok) {
        const errorMsg = `Failed to fetch students: ${response.status} ${response.statusText}`;
        throw new Error(`${errorMsg}`);
      }

      const data: StudentResponse = await response.json();
      setStudents(data.data);
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div className={classes.app}>
      <StudentList students={students}></StudentList>
    </div>
  );
};

export default App;
