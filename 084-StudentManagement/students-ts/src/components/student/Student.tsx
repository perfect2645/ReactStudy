import React from "react";
import type { StudentInfo } from "../../types/Students";

interface StudentProps {
  student: StudentInfo;
}

const Student: React.FC<StudentProps> = ({ student }) => {
  const { name, age, gender, address } = student.attributes;

  return (
    <tr>
      <td>{student.id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{address}</td>
      <td>Actions</td>
    </tr>
  );
};

export default Student;
