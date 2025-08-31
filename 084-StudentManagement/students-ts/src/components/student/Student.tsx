import React, { useCallback } from "react";
import { StudentInfo } from "../../types/Students";
import classes from "./Student.module.css";

type StudentProps = {
  student: StudentInfo;
};

const Student: React.FC<StudentProps> = ({ student }) => {
  const studentData = { id: student.id, ...student.attributes };

  const deleteStudent = useCallback(async () => {
    try {
      const response = await fetch(
        `https://localhost:7023/api/student/${studentData.id}`,
        {
          method: "delete",
        }
      );

      if (!response.ok) {
        throw Error(
          `Delete student failed.${response.status} ${response.statusText}`
        );
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  const deleteHandler = async () => {
    deleteStudent();
  };

  return (
    <tr>
      <td>{studentData.id}</td>
      <td>{studentData.name}</td>
      <td>{studentData.age}</td>
      <td>{studentData.gender}</td>
      <td>{studentData.address}</td>
      <td className={classes.actionTd}>
        <button>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default Student;
