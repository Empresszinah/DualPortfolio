import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { createClient } from "contentful";
import { Projects, About, Home, Contact, NotFound } from "./components/pages";

const App = () => {
  const [portfolio, setPortfolio] = useState([]);

  //language
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage("en");
    }
  }, []);

  //getting all portfolio
  useEffect(() => {
    const client = createClient({
      space: "7yt6klof8zh3",
      accessToken: "3JpixbqpAJO61rKytUYVMulIKCFGBAEsm1Mvy7dZK0I",
    });

    const getAllPortfolio = async () => {
      try {
        await client.getEntries({}).then((entries) => {
          setPortfolio(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAllPortfolio();
  }, []);

  return (
      <Routes>
        <Route
          exact
          path="/"
          element={<Home portfolio={portfolio} language={language} setLanguage={setLanguage} />}
        />
        <Route
          exact
          path="/about"
          element={<About portfolio={portfolio} language={language} setLanguage={setLanguage} />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact portfolio={portfolio} language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/project/:id"
          element={<Projects portfolio={portfolio} language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/project"
          element={<Projects portfolio={portfolio} language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="*"
          element={<NotFound portfolio={portfolio} language={language} setLanguage={setLanguage} />}
        />
      </Routes>
  );
};

export default App;
