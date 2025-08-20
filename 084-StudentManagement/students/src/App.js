import classes from "./App.module.css";
import React, { useCallback, useEffect, useReducer } from "react";
import StudentList from "./components/student/StudentList";
import StudentsContext from "./store/StudentsContext";

const initialStudents = {
  students: [],
  isLoading: false,
  error: null,
};

const studentsReducer = (state, action) => {
  console.log("Reducer action:", action);

  switch (action.type) {
    case "Fetch":
      return { ...state, isLoading: true, error: null };
    case "Success":
      return {
        ...state,
        isLoading: false,
        students: action.payload,
        error: null,
      };
    case "Error":
      return { ...state, isLoading: false, error: action.payload };
    case "Add":
      return { ...state, isLoading: true, error: null };
    case "Delete":
      return { ...state, isLoading: true, error: null };
    case "UPDATE_STUDENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    default:
      return state;
  }
};

const fetchStudents = async (dispatch) => {
  dispatch({ type: "Fetch" });

  try {
    const response = await fetch("https://localhost:7023/api/student/all");
    if (!response.ok) {
      throw new Error(`${response.status} Failed to fetch students`);
    }
    const data = await response.json();
    dispatch({ type: "Success", payload: data.data || [] });
  } catch (error) {
    dispatch({ type: "Error", payload: error });
  }
};

function App() {
  const [studentsState, studentsDispatch] = useReducer(
    studentsReducer,
    initialStudents
  );

  useEffect(() => {
    fetchStudents(studentsDispatch);
  }, []);

  return (
    <div className={classes.App}>
      <button
        className={classes.refreshBtn}
        onClick={() => fetchStudents(studentsDispatch)}
      >
        Refresh
      </button>
      {studentsState.isLoading && <p>Loading...</p>}
      {!studentsState.isLoading && !studentsState.error && (
        <StudentsContext.Provider value={{ studentsState, studentsDispatch }}>
          <StudentList></StudentList>
        </StudentsContext.Provider>
      )}
      {studentsState.error && <p>Error: {studentsState.error.message}</p>}
    </div>
  );
}

export default App;
