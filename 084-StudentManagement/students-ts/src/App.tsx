import React, { useCallback, useEffect, useReducer, useState } from "react";
import StudentList from "./components/student/StudentList";
import classes from "./App.module.css";

import type { StudentInfo, StudentResponse } from "./types/Students";

type StudentState = {
  studentData: StudentInfo[];
  loading: boolean;
  error: any;
};

type Action =
  | { type: "StartLoading" }
  | { type: "Loaded"; payload: StudentInfo[] }
  | { type: "Error"; payload: string };

const studentReducer = (state: StudentState, action: Action): StudentState => {
  switch (action.type) {
    case "StartLoading":
      return { ...state, loading: true, error: null };
    case "Loaded":
      return { studentData: action.payload, loading: false, error: null };
    case "Error":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const App = () => {
  const [students, studentDispatch] = useReducer(studentReducer, {
    studentData: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = useCallback(async () => {
    try {
      studentDispatch({ type: "StartLoading" });

      const response = await fetch("https://localhost:7023/api/student/all1");

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

  return (
    <div className={classes.app}>
      {students.loading && <header>Loading...</header>}
      {!students.loading && !students.error && (
        <StudentList students={students.studentData}></StudentList>
      )}
      {students.error && <footer>{students.error.message}</footer>}
    </div>
  );
};

export default App;
