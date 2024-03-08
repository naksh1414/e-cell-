import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Discover from "./pages/discover/Discover";
import OurTeam from "./pages/OurTeam/OurTeam";
import PastSpeakers from "./pages/speakers/PastSpeakers";
// import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import OurInitiatives from "./pages/OurInitiatives/OurInitiatives";
import Gallery from "./pages/Gallery/Gallery";
import Associations from "./pages/Associations/Associations";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/footer/Footer";

import IdeaSubmissions from "./pages/IdeaSubmissions/IdeaSubmissions";

import EndeavourHomePage from "./endeavour/Home/EndeavourHomePage";
import EndeavourLogin from "./endeavour/Login/EndeavourLogin";
import EndeavourRegister from "./endeavour/Register/EndeavourRegister";
import StudentPass from "./endeavour/StudentPass/StudentPass";
import AllEvents from "./endeavour/Events/AllEvents/AllEvents";
import SpecificEvent from "./endeavour/Events/SpecificEvent/SpecificEvent";

import Error404 from "./pages/ErrorPage/Error404";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <Router>
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Discover" element={<Discover />}></Route>
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/pastspeakers" element={<PastSpeakers />} />
            {/* <Route path="/refundpolicy" element={<RefundPolicy />} /> */}
            <Route path="/events" element={<OurInitiatives />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/associations" element={<Associations />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/ideasubmissions" element={<IdeaSubmissions />} />

            <Route path="/endeavour" element={<EndeavourHomePage />} />
            <Route path="/endeavour/login" element={<EndeavourLogin />} />
            <Route path="/endeavour/register" element={<EndeavourRegister />} />
            <Route path="/endeavour/studentpass" element={<StudentPass />} />
            <Route path="/endeavour/events" element={<AllEvents />} />
            <Route
              path="/endeavour/events/:eventId"
              element={<SpecificEvent />}
            />

            <Route path="*" element={<Error404 />} />

            {/* <Route path="*" element={<NoPage />} /> */}

            {/*<Route path="/ideasubmissions" element={<IdeaSubmissions />} />
          <Route path="/ideasubmissionss" element={<MultiStageForm />} />

          {/* <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path={`/tests/${courseId}/${mockTest_id}/${mockTest_id_test_id}`}
            element={<MockTest />}
          /> */}
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
