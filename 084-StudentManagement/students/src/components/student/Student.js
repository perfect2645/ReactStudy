import classes from "./Student.module.css";
import { useContext } from "react";
import StudentsContext from "../../store/StudentsContext";
import { useCallback } from "react";

const Student = (props) => {
  const studentsContext = useContext(StudentsContext);

  const { id, name, age, gender, address } = props.student;

  const deleteStudent = useCallback(async () => {
    try {
      const result = await fetch(`https://localhost:7023/api/student/${id}`, {
        method: "Delete",
      });

      if (!result.ok) {
        throw new Error(`${result.status} Failed to delete student`);
      }

      studentsContext.studentsDispatch({ type: "Fetch", payload: id });
    } catch (error) {
      studentsContext.studentsDispatch({ type: "Error", payload: id });
    }
  }, [id, studentsContext]);

  const deleteHandler = async () => {
    await deleteStudent();
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{address}</td>
      <td>
        <button>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default Student;
