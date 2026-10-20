import classes from "./StudentList.module.css";
import Student from "./Student";
import { useContext } from "react";
import StudentsContext from "../../store/StudentsContext";
import StudentForm from "./StudentForm";

const StudentList = () => {
  const studentsContext = useContext(StudentsContext);

  return (
    <table className={classes.studentTable}>
      <caption>Student List</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
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
      <tfoot>
        <StudentForm></StudentForm>
      </tfoot>
    </table>
  );
};

export default StudentList;
