import React, { useCallback, useEffect, useState } from "react";
import StudentList from "./components/student/StudentList";
import classes from "./App.module.css";

import type {
  StudentInfo,
  StudentAttribute,
  StudentResponse,
} from "./types/Students";

const App = () => {
  const [students, setStudents] = useState<StudentInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("https://localhost:7023/api/student/all");

      if (!response.ok) {
        const errorMsg = `Failed to fetch students: ${response.status} ${response.statusText}`;
        throw new Error(`${errorMsg}`);
      }

      const data: StudentResponse = await response.json();
      setStudents(data.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className={classes.app}>
      {loading && <header>Loading...</header>}
      {!loading && <StudentList students={students}></StudentList>}
    </div>
  );
};

export default App;
