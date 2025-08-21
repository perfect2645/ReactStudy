import classes from "./StudentList.module.css";
import { StudentInfo } from "../../types/Students";
import StudentComponent from "./Student";

interface StudentsListProps {
  students: StudentInfo[];
}

const StudentList: React.FC<StudentsListProps> = ({ students }) => {
  return (
    <table className={classes.StudentList}>
      <caption>Student management</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentComponent key={student.id} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
