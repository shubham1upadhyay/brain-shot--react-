import React from "react";
import { HomePage } from "./myComponent/HomePage";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css"
import { OnePageAssesment } from "./pages/OnePageAssesment";
import { CreateForm } from "./pages/CreateForm";
import { Categories } from "./pages/Categories";
import { PleaseWait } from "./pages/PleaseWait";
const App = () => {



  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/navbar" element={<Navbar />} />
      </Routes>

      <Routes>
        <Route path="/category" element={<Categories />} />
      </Routes>

      <Routes>
        <Route path="/onePageAssessment" element={<OnePageAssesment/>} />
      </Routes>

      <Routes>
        <Route path="/createaccount" element={<CreateForm />} />
      </Routes>

      <Routes>
        <Route path="/pleasewait" element={<PleaseWait/>} />
      </Routes>

    </>

  );
}
export default App;