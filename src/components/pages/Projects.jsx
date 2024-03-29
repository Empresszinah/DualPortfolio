import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";
import { Navbar,Footer } from '../layout';

const Projects = ({ portfolio, language, setLanguage }) => {
  const [lPortfolio, setLPortfolio] = useState([]);
  const [image, setImage] = useState();
  const { id } = useParams();
  let locale = "en-US";

  if (language !== "en") {
    locale = language;
  }

  //getting all portfolio
  useEffect(() => {
    const client = createClient({
      space: "7yt6klof8zh3",
      accessToken: "3JpixbqpAJO61rKytUYVMulIKCFGBAEsm1Mvy7dZK0I",
    });

    const getPortfolio = async () => {
      try {
        const entries = await client.getEntries({ "sys.id": id, locale: locale });
        setLPortfolio(entries?.items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    const getImage = async () => {
      try {
        const entries = await client.getEntries({ "sys.id": id });
        setImage(entries?.items[0]?.fields?.dispalyimage?.fields?.file?.url);
      } catch (error) {
        console.log(error);
      }
    };

    getPortfolio();
    getImage();
  }, [id, locale]);

  return (
    <>
      {lPortfolio && (
        <>
          <Navbar id={id} portfolio={portfolio} language={language} setLanguage={setLanguage} />

          <div className="container mx-auto my-5 px-3">
            <p>{lPortfolio?.fields?.title}</p>
            <p>Role: UI/UX Designer</p>
            <p>Context: {lPortfolio?.fields?.context}</p>
            <p>Duration: {lPortfolio?.fields?.duration}</p>
            <img
              key={lPortfolio?.sys?.id}
              src={`https:${image}`}
              className="w-full mx-auto mt-4 mb-5"
              alt={lPortfolio?.fields?.title}
            />
            <ReactMarkdown className="markdown">{lPortfolio?.fields?.mainbody}</ReactMarkdown>
          </div>
        </>
      )}
      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Projects;
