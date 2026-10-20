import React from "react";

const StudentsContext = React.createContext({
  studentsDispatch: () => {},
  studentsState: { students: [], isLoading: false, error: null },
});

export default StudentsContext;
