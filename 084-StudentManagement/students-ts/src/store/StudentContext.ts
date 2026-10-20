import React, { Dispatch } from "react";
import { StudentAction, StudentInfo } from "../types/Students";

interface StudentsContextType {
  studentDispatch: Dispatch<StudentAction>;
  fetchStudents: () => Promise<void>;
  students: { students: StudentInfo[]; loading: String; error: any };
}

const StudentsContext = React.createContext<StudentsContextType>({
  studentDispatch: () => { },
  fetchStudents: async () => {},
  students: { students: [], loading: "", error: null },
});

export default StudentsContext;