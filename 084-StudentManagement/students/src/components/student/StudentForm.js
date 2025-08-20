import React, { useContext } from "react";
import classes from "./StudentForm.module.css";
import StudentsContext from "../../store/StudentsContext";
import { useCallback } from "react";

const StudentForm = () => {
  const studentsContext = useContext(StudentsContext);

  const [newStudent, setNewStudent] = React.useState({
    name: "",
    age: "",
    gender: "男",
    address: "",
  });

  const nameChangedHandler = (event) => {
    setNewStudent((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };
  const ageChangedHandler = (event) => {
    setNewStudent((prevState) => ({
      ...prevState,
      age: event.target.value,
    }));
  };
  const genderChangedHandler = (event) => {
    setNewStudent((prevState) => ({
      ...prevState,
      gender: event.target.value,
    }));
  };
  const addressChangedHandler = (event) => {
    setNewStudent((prevState) => ({
      ...prevState,
      address: event.target.value,
    }));
  };

  const addStudent = useCallback(async () => {
    try {
      studentsContext.studentsDispatch({
        type: "Add",
        payload: data.data,
      });

      const result = await fetch(" https://localhost:7023/api/student", {
        method: "POST",
        body: JSON.stringify({ data: newStudent }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!result.ok) {
        throw new Error(`${result.status} Failed to add student`);
      }

      const data = await result.json();
      studentsContext.studentsDispatch({
        type: "Add",
        payload: data.data,
      });
    } catch (error) {
      studentsContext.studentsDispatch({ type: "ERROR", payload: error });
    } finally {
    }
  }, []);

  const addHandler = async () => {
    await addStudent();
  };

  return (
    <>
      <tr className={classes.studentForm}>
        <td>
          <input type="text" disabled="disabled"></input>
        </td>
        <td>
          <input
            type="text"
            value={newStudent.name}
            onChange={nameChangedHandler}
          ></input>
        </td>
        <td>
          <input
            type="text"
            value={newStudent.age}
            onChange={ageChangedHandler}
          ></input>
        </td>
        <td>
          <select value={newStudent.gender} onChange={genderChangedHandler}>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            value={newStudent.address}
            onChange={addressChangedHandler}
          ></input>
        </td>
        <td>
          <button onClick={addHandler}>Add</button>
        </td>
      </tr>
    </>
  );
};

export default StudentForm;
