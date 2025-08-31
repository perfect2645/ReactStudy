import React, { Dispatch } from "react";
import { StudentAction, StudentInfo } from "../types/Students";

interface StudentsContextType {
  studentDispatch: Dispatch<StudentAction>;
  students: { students: StudentInfo[]; loading: String; error: any };
}

const StudentsContext = React.createContext<StudentsContextType>({
  studentDispatch: () => {},
  students: { students: [], loading: "", error: null },
});

export default StudentsContext;