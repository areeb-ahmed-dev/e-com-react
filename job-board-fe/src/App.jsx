import { useEffect } from "react";
import { fetchJobs } from "./api/jobs";

export default function App() {
  useEffect(() => {
    fetchJobs("react").then((data) => console.log(data)); // Should log jobs data
  }, []);

  return <h1 className="text-3xl font-bold text-blue-500">Job Board</h1>;
}