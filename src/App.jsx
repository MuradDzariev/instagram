import { useDispatch } from "react-redux";
import { getUser } from "./redux/actions/authAction";
import { useEffect } from "react";
import { Alert, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Discover, Message, Profile } from "./pages";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Alert />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/messages" element={<Message />} />
      </Routes>
    </div>
  );
};

export default App;
