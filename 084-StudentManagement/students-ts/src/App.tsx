import { useCallback, useEffect, useReducer } from "react";
import StudentList from "./components/student/StudentList";
import classes from "./App.module.css";
import StudentsContext from "./store/StudentContext";

import type {
  StudentResponse,
  StudentAction,
  StudentState,
} from "./types/Students";

const studentReducer = (
  state: StudentState,
  action: StudentAction
): StudentState => {
  switch (action.type) {
    case "StartLoading":
      return { ...state, loading: "Loading...", error: null };
    case "Loaded":
      return { students: action.payload, loading: "", error: null };
    case "Error":
      return { ...state, error: action.payload, loading: "" };
    default:
      return state;
  }
};

const App = () => {
  const [students, studentDispatch] = useReducer(studentReducer, {
    students: [],
    loading: "",
    error: null,
  });

  const fetchStudents = useCallback(async () => {
    try {
      studentDispatch({ type: "StartLoading" });

      const response = await fetch("https://localhost:7023/api/student/all");

      if (!response.ok) {
        const errorMsg = `Failed to fetch students: ${response.status} ${response.statusText}`;
        throw new Error(`${errorMsg}`);
      }

      const data: StudentResponse = await response.json();
      studentDispatch({ type: "Loaded", payload: data.data });
    } catch (err: any) {
      studentDispatch({ type: "Error", payload: err });
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div className={classes.app}>
      <button className={classes.refreshBtn} onClick={() => fetchStudents()}>
        Refresh
      </button>
      {students.loading && <header>{students.loading}</header>}
      {!students.loading && !students.error && (
        <StudentsContext.Provider value={{ studentDispatch, students }}>
          <StudentList students={students.students}></StudentList>
        </StudentsContext.Provider>
      )}
      {students.error && <footer>{students.error.message}</footer>}
    </div>
  );
};

export default App;
