import classes from "./StudentList.module.css";
import Student from "./Student";
import { useContext } from "react";
import StudentsContext from "../../store/StudentsContext";

const StudentList = () => {
  const studentsContext = useContext(StudentsContext);

  console.log("StudentList context:", studentsContext);

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {studentsContext.studentsState.students.map((stu) => (
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
