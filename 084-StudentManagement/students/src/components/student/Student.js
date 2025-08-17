import classes from "./Student.module.css";
import { useContext } from "react";
import StudentsContext from "../../store/StudentsContext";

const Student = (props) => {
  const studentsContext = useContext(StudentsContext);

  const { id, name, age, gender, address } = props.student;

  const deleteHandler = async () => {
    try {
      const result = await fetch(`https://localhost:7023/api/student/${id}`, {
        method: "DELETE",
      });

      if (!result.ok) {
        throw new Error(`${result.status} Failed to delete student`);
      }

      studentsContext.studentsDispatch({ type: "Fetch", payload: id });
    } catch (error) {
      studentsContext.studentsDispatch({ type: "ERROR", payload: id });
    }
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
