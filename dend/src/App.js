import React from "react";
import "./index.css";
import Home from "./routes/Home"
import { Careers } from "./routes/Careers";
import Aboutus from "./routes/Aboutus"
import Doctor from "./routes/Doctor"
import Engineer from "./routes/Engineer"
import Lawyer from "./routes/Lawyer"
import FD from "./routes/FD"
import Baker from "./routes/Baker"
import Accountant from "./routes/Accountant"
import Architect from "./routes/Architect"
import Astronaut from "./routes/Astronaut"
import Entrepreneur from "./routes/Entrepreneur"
import Journalist from "./routes/Journalist"
import Lecturer from "./routes/Lecturer"
import Military from "./routes/Military"
import Police from "./routes/Police"
import Pilot from "./routes/Pilot"
import Photographer from "./routes/Photographer"
import Scientist from "./routes/Scientist"
import Writer from "./routes/Writer"

import {Route,Routes} from "react-router-dom"

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Careers" element={<Careers />} />
    <Route path="/Aboutus" element={<Aboutus />} />
    <Route path="/Doctor" element={<Doctor />} />
    <Route path="/Engineer" element={<Engineer />} />
    <Route path="/Lawyer" element={<Lawyer />} />
    <Route path="/FD" element={<FD />} />
    <Route path="/Baker" element={<Baker />} />
    <Route path="/Accountant" element={<Accountant />} />
    <Route path="/Architect" element={<Architect />} />
    <Route path="/Astronaut" element={<Astronaut />} />
    <Route path="/Entrepreneur" element={<Entrepreneur />} />
    <Route path="/Journalist" element={<Journalist />} />
    <Route path="/Lecturer" element={<Lecturer />} />
    <Route path="/Military" element={<Military />} />
    <Route path="/Police" element={<Police />} />
    <Route path="/Pilot" element={<Pilot />} />
    <Route path="/Photographer" element={<Photographer />} />
    <Route path="/Scientist" element={<Scientist />} />
    <Route path="/Writer" element={<Writer />} />
    

   </Routes>
   </>
  );
}

export default App;
