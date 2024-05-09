import { useEffect } from "react"
import { getUsers } from "./services/user.service"

function App() {

  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <>
      <h1>app</h1>
    </>
  )
}

export default App
