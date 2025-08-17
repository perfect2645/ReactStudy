import classes from "./Student.module.css";

const Student = (props) => {
  const { id, name, age, gender, address } = props.student;

  const deleteHandler = async () => {
    try {
      const result = await fetch(`https://localhost:7023/api/student/${id}`, {
        method: "DELETE",
      });

      if (!result.ok) {
        throw new Error(`${result.status} Failed to delete student`);
      }

      // props.studentsDispatch({ type: "REMOVE_STUDENT", payload: id });
      props.studentsDispatch({ type: "Fetch", payload: id });
    } catch (error) {
      props.studentsDispatch({ type: "ERROR", payload: id });
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
