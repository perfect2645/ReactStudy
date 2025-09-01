import React, { useContext } from "react";
import { StudentInfo } from "../../types/Students";
import Student from "./Student";
import classes from "./StudentList.module.css";
import StudentsContext from "../../store/StudentContext";

const StudentList = () => {
  const studentsContext = useContext(StudentsContext);

  return (
    <table className={classes.studentTable}>
      <caption>Student Table</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {studentsContext.students.students.map((s) => (
          <Student key={s.id} student={s}></Student>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
