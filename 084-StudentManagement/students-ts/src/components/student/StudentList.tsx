import classes from "./StudentList.module.css";

const StudentList = () => {
  return (
    <table className={classes.StudentList}>
      <thead>
        <title>Student management</title>
      </thead>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </tbody>
    </table>
  );
};

export default StudentList;
