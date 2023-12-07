import Image from "next/legacy/image";
import { FaHtml5, FaNodeJs,FaJava, FaAngleRight, FaGithub, FaLinux, FaReact, FaPython } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";

export default function Projects() {
    // let gh = "https://github.com/buttafraz22";
    let [projects] = useState([
      {
        name: "Demo finance app",
        description:
          "A finance app marking the demonstrations of agile practices in CRUD and API developments.",
        isLeft: true,
        link: "https://github.com/buttafraz22/seproject",
        icon: {
          name: FaReact,
          fill: clsx("group-hover:fill-[#FF2D20]"),
        },
        image: {
          src: "/img/projects/siswa-crud.webp",
          alt: "Siswa CRUD",
          width: 448,
          height: 148,
        },
      },
      {
        name: "Machine Learning Analysis Breast Cancer",
        description:
          "An analysis of breast cancer data using machine learning techniques.",
        isLeft: true,
        link: "https://github.com/buttafraz22/BreastCancer-ML3",
        icon: {
          name: FaPython,
          fill: clsx("group-hover:fill-[#E96228]"),
        },
        image: {
          src: "/img/projects/rps.webp",
          alt: "Breast Cancer",
          width: 448,
          height: 148,
        },
      },
      {
        name: "File Watcher Daemon",
        description:
          "FileWatcher is my experiment with linux programming. It watches file changes and logs them into a file.",
        isLeft: false,
        link: "https://youtu.be/WbaMlpxQ3oY?si=LUSIA7uCT2n4QWuI",
        icon: {
          name: FaLinux,
          fill: clsx("group-hover:fill-[#689F63]"),
        },
        image: {
          src: "/img/projects/daemon.webp",
          alt: "daemon logo",
          layout: "fill",
          width: 348,
          height: 128,
        },
      },
      {
        name: "Smart Trashcan",
        description:
          "An smart trashcan code that senses for an obstacle and opens up a lid using servo motor.",
        isLeft: true,
        link: "https://github.com/buttafraz22/COAL21-Trashcan",
        icon: {
          name: FaJava,
          fill: clsx("group-hover:fill-[#689F63]"),
        },
        image: {
          src: "/img/projects/coal.webp",
          alt: "gempa bot",
          width: 448,
          height: 148,
        },
      },

    ]);
    return (
      <>
        {/* Projects Starts */}

        <div className="px-6">
          <Waypoints target={'toprojects'}>
            <section id="projects" className="pt-28">
              <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
                Some of My Projects
              </h1>
              <div className="flex justify-center">
                <span
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
                {projects.map(
                  ({ name, description, isLeft, link, icon, image }) => {
                    return (
                      <Fragment key={name}>
                        <div className="flex justify-center">
                          <a
                            className={`group hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-xl image-full"
                              data-aos="fade-up"
                            >
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p>{description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div></div>
                        <div></div>
                      </Fragment>
                    );
                  }
                )}
              </div>

              <div className="text-center mt-20">
                <a
                  className="btn btn-wide"
                  href="https://github.com/buttafraz22?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2 w-5 h-5" />
                  View all my Projects <FaAngleRight className="ml-2" />
                </a>
              </div>
            </section>
          </Waypoints>
        </div>

        {/* Projects Ends */}
      </>
    );
}