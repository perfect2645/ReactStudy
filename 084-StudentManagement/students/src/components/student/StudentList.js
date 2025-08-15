import classes from "./StudentList.module.css";
import Student from "./Student";

const StudentList = (props) => {
  return (
    <table className={classes.studentTable}>
      <caption>Student List</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((stu) => (
          <Student
            key={stu.id}
            student={{ id: stu.id, ...stu.attributes }}
          ></Student>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
