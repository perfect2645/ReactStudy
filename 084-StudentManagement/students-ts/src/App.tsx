import { useEffect, useState } from "react";
import classes from "./App.module.css";
import StudentsList from "./components/student/StudentList";
import { useCallback } from "react";

// 定义单个学生的接口
interface StudentAttributes {
  name: string;
  gender: string;
  age: number;
  address: string;
}

interface Student {
  id: number;
  attributes: StudentAttributes;
}

// 如果接口返回的是数组
type StudentResponse = Student[];

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState(null);

  const fetchStudents = useCallback(async () => {
    setError(null);
    try {
      const res: Response = await fetch(
        "https://localhost:7023/api/student/all"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch students");
      }
      const data: StudentResponse = await res.json();
      setStudents(data);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div className={classes.App}>
      <StudentsList></StudentsList>
    </div>
  );
}

export default App;
