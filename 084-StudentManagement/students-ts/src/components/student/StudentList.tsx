import React from "react";
import { StudentInfo } from "../../types/Students";
import Student from "./Student";
import classes from "./StudentList.module.css";

type StudentListProps = {
  students: StudentInfo[];
};

const StudentList: React.FC<StudentListProps> = ({ students }) => {
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
        {students.map((s) => (
          <Student key={s.id} student={s}></Student>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
