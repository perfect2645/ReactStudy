import classes from "./App.module.css";
import React, { useEffect } from "react";
import StudentList from "./components/student/StudentList";

function App() {
  const [studtents, setStudents] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Fetching students from the API
        const response = await fetch("https://localhost:7023/api/student/all");
        if (!response.ok) {
          throw new Error(`${response.status} Failed to fetch students`);
        }
        const data = await response.json();
        setStudents(data.data || []);
      } catch (error) {
        console.error("Error fetching students:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className={classes.App}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && <StudentList students={studtents}></StudentList>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default App;
