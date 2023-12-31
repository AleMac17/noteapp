import { Layout } from "./layout/layout.jsx";
import { Login } from "./views/login/Login.jsx";
import { NotesProvider } from "../src/context/index.jsx";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <NotesProvider>
        {isLoggedIn ? <Layout /> : <Login onLogin={handleLogin} />}
      </NotesProvider>
    </>
  );
}

export default App;
