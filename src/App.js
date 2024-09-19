import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calci from "./pages/Calci";
import Practice from "./pages/Practice";
import Tictac from "./pages/Tictac";
import Snakeladder from "./pages/Snakeladder";
import Sidebar from "./pages/Sidebar";
import Slider from "./pages/Slider";
import Function from "./pages/Function";
import Slider2 from "./pages/Slider2";
import Todo from './pages/Todo';
import Clock from "./pages/Clock";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calci" element={<Calci />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/snakeladder" element={<Snakeladder />}></Route>
        <Route path="/tictac" element={<Tictac />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/slider" element={<Slider />}></Route>
        <Route path="/function" element={<Function />}></Route>
        <Route path="/slider2" element={<Slider2 />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/clock" element={<Clock />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
