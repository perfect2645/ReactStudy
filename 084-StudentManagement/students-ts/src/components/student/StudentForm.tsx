import { useState, useCallback } from "react";
import classes from "./StudentForm.module.scss";

type StudentFormData = {
  name: string;
  age: number;
  gender: "男" | "女";
  address: string;
};

const StudentForm = () => {
  const [inputData, setinputData] = useState<StudentFormData>({
    name: "",
    age: 20,
    gender: "女",
    address: "",
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;

    if (name === "age") {
      value = filterPositiveInteger(value);
    }

    setinputData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const filterPositiveInteger = useCallback((value: string) => {
    return value.replace(/[^\d]/g, "").replace(/^0+/, "");
  }, []);

  const addStudentHandler = useCallback(async () => {
    fetch("https://localhost:7023/api/student");
  }, []);

  return (
    <tr className={classes.studentForm}>
      <td></td>
      <td>
        <input
          name="name"
          type="text"
          value={inputData.name}
          onChange={inputChangeHandler}
        ></input>
      </td>
      <td>
        <input
          name="age"
          type="number"
          value={inputData.age}
          min="0"
          max="120"
          placeholder="Age"
          onChange={inputChangeHandler}
        ></input>
      </td>
      <td>
        <select name="gender" className={classes.gender}>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </td>
      <td>
        <input name="address" type="text"></input>
      </td>
      <td>
        <button className={classes.addBtn} onClick={addStudentHandler}>
          添加
        </button>
      </td>
    </tr>
  );
};

export default StudentForm;
