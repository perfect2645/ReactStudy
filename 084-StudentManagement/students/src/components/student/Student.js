import classes from "./Student.module.css";

const Student = ({ student: { id, name, age, gender, address } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{address}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default Student;
