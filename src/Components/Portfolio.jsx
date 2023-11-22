

import React from "react";


import image from "../images/aa.avif";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Texttutils 🎉",
    description:
      "The Text Changer app empowers users to easily transform and manipulate text with a variety of customizable options. Seamlessly altering content, it offers a versatile tool for enhancing creativity and improving text formatting",
    url: "https://github.com/AliAbdullah20k0248/text-changer",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/AliAbdullah20k0248/portfolio",
  },
  {
    title: "Sorting Analyzer",
    description:
      "The Sorting Analyzer app provides a comprehensive insight into sorting algorithms' performance, allowing users to visualize and compare their efficiency",
    url: "",
  },
  {
    title: "NewsMonkey",
    description:
      "The NewsApp delivers real-time, personalized news updates, keeping users informed with a seamless and curated news browsing experience.",
    url: "https://github.com/AliAbdullah20k0248/NewsApp",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
