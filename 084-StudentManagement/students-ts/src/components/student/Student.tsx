import React, { useCallback, useContext } from "react";
import { StudentInfo } from "../../types/Students";
import classes from "./Student.module.css";
import StudentsContext from "../../store/StudentContext";
import StudentEditForm from "./StudentEditForm";

type StudentProps = {
  student: StudentInfo;
};

const Student: React.FC<StudentProps> = ({ student }) => {
  const studentContext = useContext(StudentsContext);

  const studentData = { id: student.id, ...student.attributes };

  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const deleteStudent = useCallback(async () => {
    try {
      studentContext.studentDispatch({
        type: "Deleting",
        payload: studentData.name,
      });

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

      studentContext.fetchStudents();
    } catch (error: any) {
      studentContext.studentDispatch({ type: "Error", payload: error });
    }
  }, []);

  const deleteHandler = () => {
    deleteStudent();
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  return isEditing ? (
    <StudentEditForm />
  ) : (
    <tr>
      <td>{studentData.id}</td>
      <td>{studentData.name}</td>
      <td>{studentData.age}</td>
      <td>{studentData.gender}</td>
      <td>{studentData.address}</td>
      <td className={classes.actionTd}>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default Student;
