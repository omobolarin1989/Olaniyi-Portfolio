import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

   function ProjectWork() {

  const projects = [
    {
      number: "01",
      name: "FutureForge",
      category: "Learning Platform",
      description:
        "A community-first learning platform helping graduates transition into technology through mentorship, practical learning, and collaborative growth.",

      image: "/images/project-image/futureforge.PNG",

      technologies: [
        "React",
        "Tailwind CSS",
        "REST API",
      ],

      liveLink:
        "https://futureforge-project-snx5.vercel.app/",

      githubLink:
        "https://github.com/omobolarin1989/futureforge_project",
    },

    {
      number: "02",
      name: "Huddle Landing Page",
      category: "Frontend Mentor Challenge",

      description:
        "A responsive landing page designed to provide a clean and engaging experience across desktop and mobile devices.",

      image: "/images/project-image/Huddle.PNG",

      technologies: [
        "React",
        "CSS",
        "Responsive Design",
      ],

      liveLink:
        "huddle-frontend-mentor-sand.vercel.app",

      githubLink: "https://github.com/omobolarin1989/huddle",
    },

    {
      number: "03",
      name: "Bento Grid Project",
      category: "Frontend Mentor Challenge",

      description:
        "This is perfect for testing your CSS Grid and responsive skills with this bento grid layout.",

      image: "/images/project-image/Bento Grid.PNG",

      technologies: [
        "React",
        "Tailwind CSS",
        "Responsive Design",
      ],

      liveLink:
        "https://bucolic-bublanina-3e5d33.netlify.app/",

      githubLink: "https://github.com/omobolarin1989/Bento-Grid",
    },

    {
      number: "04",
      name: "Checkout Calculator",
      category: "Simple Calculator Project",

      description:
        "This helps to calculate the total cost of items in a shopping cart, including taxes and discounts.",

      image: "/images/project-image/Caheckout calculator.PNG",

      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],

      liveLink:
        "https://app.netlify.com/projects/checkout-calculator/overview",

      githubLink: "https://github.com/omobolarin1989/checkout-calculator",
    },

    {
      number: "05",
      name: "Responsive 4 card feature Page",
      category: "Frontend Mentor Challenge",

      description:
        "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",

      image: "/images/project-image/four section.PNG",

      technologies: [
        "HTML",
        "CSS",
        "Responsive Design",
      ],

      liveLink:
        "four-card-feature-lemon.vercel.app",

      githubLink: "https://github.com/omobolarin1989/four-card-feature",
    },

    {
      number: "06",
      name: "Four Card Feature Project",
      category: "Frontend Mentor Challenge",

      description:
        "This will test anyone who is new to multi-column and responsive layouts",

      image: "/images/project-image/Preview card.PNG",

      technologies: [
        "React",
        "CSS",
        "Responsive Design",
      ],

      liveLink:
        "olapreview-card.netlify.app",

      githubLink: "https://github.com/omobolarin1989/preview-card",
    },

 {
      number: "07",
      name: "Flex Living",
      category: "A Beginner Project work",

      description:
        "This is a simple landing page for a fictional company called Flex Living. It showcases the company's services and features in a clean and modern design.",

      image: "/images/project-image/Living.PNG",

      technologies: [
        "HTML",
        "CSS",
      ],

      liveLink:
        "https://flexliving-roan.vercel.app/#",

      githubLink: "https://github.com/omobolarin1989/flexliving",
    }

    
  ];

 return (

      <section
      id="projects"
      className="bg-[#111116] text-white px-6 md:px-16 py-20 md:py-28"
    >

       <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
        <div className="mb-14">

          <p className="text-purple-400 font-semibold tracking-widest mb-3">
            MY WORK
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-purple-400">
              Projects.
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl leading-7">
            Here are some projects I've worked on,
            showcasing my skills in building responsive
            and user-friendly web applications.
          </p>

        </div>

{/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {projects.map((project) => (

            <div
              key={project.number}
              className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500 transition duration-300"
            >

              {/* Project Image */}
              <div className="overflow-hidden bg-gray-900">

                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition duration-500"
                />

              </div>

                {/* Project Details */}
              <div className="p-6 md:p-8">

                <div className="flex justify-between items-center mb-4">

                  <span className="text-purple-400 font-semibold">
                    {project.number}
                  </span>

                  <span className="text-sm text-gray-400">
                    {project.category}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.name}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>
 {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="bg-purple-500/10 text-purple-300 px-3 py-2 rounded-full text-sm"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

                  {/* Project Links */}
                <div className="flex flex-wrap gap-5">

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-purple-400 transition"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>

                  {project.githubLink && (

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-purple-400 transition"
                    >
                      GitHub
                      <FaGithub />
                    </a>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>




       </div>
    </section>
     
 )

   }

export default ProjectWork;