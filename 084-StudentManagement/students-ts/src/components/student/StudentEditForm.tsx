import React from "react";
import classes from "./StudentForm.module.scss";

const StudentEditForm = () => {
  return (
    <tr className={classes.studentForm}>
      <td>
        <span></span>
      </td>
      <td>
        <input type="text" name="name" id="" />
      </td>
      <td>
        <input type="text" name="age" id="" />
      </td>
      <td>
        <select name="gender" id="" className={classes.gender}>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </td>
      <td>
        <input type="text" name="address" id="" />
      </td>
      <td>
        <button className={classes.btn}>Save</button>
        <button className={classes.btn}>Cancel</button>
      </td>
    </tr>
  );
};

export default StudentEditForm;
