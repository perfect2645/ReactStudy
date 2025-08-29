import React from "react";
import { StudentInfo } from "../../types/Students";
import classes from "./Student.module.css";

type StudentProps = {
  student: StudentInfo;
};

const Student: React.FC<StudentProps> = ({ student }) => {
  const studentData = { id: student.id, ...student.attributes };

  return (
    <tr>
      <td>{studentData.id}</td>
      <td>{studentData.name}</td>
      <td>{studentData.age}</td>
      <td>{studentData.gender}</td>
      <td>{studentData.address}</td>
      <td className={classes.actionTd}>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default Student;
