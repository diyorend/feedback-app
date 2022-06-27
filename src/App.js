import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackItemList from "./components/FeedbackItemList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackContext, { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackItemList />
                <AboutIconLink />
              </>
            }
          />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
