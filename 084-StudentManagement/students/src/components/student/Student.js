import React from "react";

const Student = ({ student: { id, name, age, gender, address } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{address}</td>
    </tr>
  );
};

export default Student;
