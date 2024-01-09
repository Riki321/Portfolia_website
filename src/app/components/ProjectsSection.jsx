"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A simple portfolio website to showcase my projects",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "LDPC Encoder/Decoder Algorithms",
    description: "Built a Channel using a bipartite graph that connects the encoder at the transmitter and the decoder at the receiver. This mainly focuses on minimizing the error for binary symmetric or binary eraser channels, respectively, for flipped and erased bits.",
    image: "/images/projects/LDPC.png",
    tag: ["All"],
    gitUrl: "https://github.com/Riki321/LDPC-CODING-AND-DECODING",
    previewUrl: "https://github.com/Riki321/LDPC-CODING-AND-DECODING",
  },
  {
    id: 3,
    title: "2D Game",
    description: "I made a game using Unity and Photoshop. The game is basically the 2D platform game with AIgenerated 2D characters, environment and free assets. Using my basic level design, animation ragging, FSM and coding knowledge in Unity, I have successfully made a 2D game.",
    image: "/images/projects/2dgame.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Shuttle Ride Application",
    description: "Built a shuttleWeb App which is a ride-sharing platform. It offers easy ride options to drivers, while shared ride options allow users to save costs. I have worked on the Flutter project’s integration of Mapbox and Google Map API, pop-up notifications, and real-time driver location tracking.",
    image: "/images/projects/suttle_app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Kamal-1402/SRI-2023-ShuttleApp",
    previewUrl: "https://github.com/Kamal-1402/SRI-2023-ShuttleApp",
  },
  {
    id: 5,
    title: "Programming Club Website",
    description: "We made a programming club website that allows students to register and compete in coding events and view their coding history. The news, page allows students to access and explore complete articles within their area of interest. I have worked on Node.js & MongoDB to implement the backend",
    image: "/images/projects/programming_club.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
