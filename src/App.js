import "./App.css";
import Navbar from "./navigation/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase/Firebase";
import { useState, useEffect } from "react";
import { SignUp } from "./pages/SignUp";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(`USER AUTH - ${userAuth}`);
        setUser(user);
        console.log(`USER - ${user}`);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <header>
        <Router>
          {user ? <Navbar /> : <SignUp />}
        </Router>
      </header>
    </div>
  );
}

export default App;
