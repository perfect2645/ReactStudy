import React from "react";
import classes from "./StudentForm.module.scss";
import { StudentAttribute } from "../../types/Students";
import { on } from "events";

type StudentEditFormProps = {
  student: {
    id: number;
    attributes: StudentAttribute;
  };
  onCancel: () => void;
};

const StudentEditForm: React.FC<StudentEditFormProps> = ({
  student,
  onCancel,
}) => {
  const [studentData, setStudentData] = React.useState<StudentAttribute>({
    name: student.attributes.name,
    age: student.attributes.age,
    gender: student.attributes.gender,
    address: student.attributes.address,
  });

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setStudentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <tr className={classes.studentForm}>
      <td>
        <span>{student.id}</span>
      </td>
      <td>
        <input
          type="text"
          name="name"
          value={studentData.name}
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <input
          type="text"
          name="age"
          value={studentData.age}
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <select
          name="gender"
          className={classes.gender}
          value={studentData.gender}
          onChange={onChangeHandler}
        >
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={studentData.address || ""}
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <button className={classes.btn}>Save</button>
        <button className={classes.btn} onClick={() => onCancel()}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default StudentEditForm;
