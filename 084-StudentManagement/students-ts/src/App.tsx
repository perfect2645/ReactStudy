import { useEffect, useState } from "react";
import classes from "./App.module.css";
import StudentsList from "./components/student/StudentList";
import { useCallback } from "react";
import { StudentInfo, StudentResponse } from "./types/Students";

function App() {
  const [students, setStudents] = useState<StudentInfo[]>([]);
  const [error, setError] = useState(null);

  const fetchStudents = useCallback(async () => {
    setError(null);
    try {
      const res: any = await fetch("https://localhost:7023/api/student/all");
      if (!res.ok) {
        throw new Error("Failed to fetch students");
      }
      const data: StudentResponse = await res.json();

      setStudents(data.data);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div className={classes.App}>
      <StudentsList students={students}></StudentsList>
    </div>
  );
}

export default App;
