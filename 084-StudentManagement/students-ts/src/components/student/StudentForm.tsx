import { useState, useCallback, useContext } from "react";
import classes from "./StudentForm.module.scss";
import axios from "axios";
import StudentsContext from "../../store/StudentContext";

type StudentFormData = {
  name: string;
  age: number;
  gender: "男" | "女";
  address: string;
};

const StudentForm = () => {
  const studentContext = useContext(StudentsContext);

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
    try {
      const url = "https://localhost:7023/api/student";

      const studentCreateDto = {
        attributes: {
          name: inputData.name,
          age: inputData.age,
          gender: inputData.gender,
          address: inputData.address,
        },
      };

      await axios.post(url, studentCreateDto, {
        // headers: { "Content-Type": "application/json" },
        timeout: 5000,
      });
    } catch (err: any) {
      studentContext.studentDispatch({ type: "Error", payload: err.message });
    } finally {
      studentContext.fetchStudents();
    }
  }, [inputData]);

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
        <select
          name="gender"
          className={classes.gender}
          value={inputData.gender}
          onChange={inputChangeHandler}
        >
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </td>
      <td>
        <input
          name="address"
          type="text"
          value={inputData.address}
          onChange={inputChangeHandler}
        ></input>
      </td>
      <td>
        <button className={classes.btn} onClick={addStudentHandler}>
          添加
        </button>
      </td>
    </tr>
  );
};

export default StudentForm;
