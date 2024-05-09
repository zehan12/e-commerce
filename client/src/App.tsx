import { useEffect } from "react"
import { getUsers } from "./services/user.service"
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationRoutes from "./routes";

function App() {

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Router>
        <ApplicationRoutes />
      </Router>
    </>
  )
}

export default App
