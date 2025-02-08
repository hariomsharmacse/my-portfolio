interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Web Research Analyst",
    company: "Damco Group",
    duration: "Jan 2021 - Feb 2024",
    description:
      "Conducted in-depth web research to extract and validate high-quality data, enabling strategic business insights. Played a key role in data-driven decision-making, ensuring precision and efficiency in research methodologies.",
  },
  {
    role: "HeyDay Care Private Limited",
    company: "Warehouse Executive",
    duration: "JUN 2019 - DEC 2020",
    description:
      "Efficiently managed warehouse operations by optimizing inventory workflows and ensuring seamless stock handling. Maintained precise records, improved logistical efficiency, and collaborated with teams to enhance productivity and on-time order fulfillment.",
  },
  {
    role: "MERN Stack Developer (Learning)",
    company: "Self-Learning",
    duration: "FEB 2024 - Present",
    description:
      "Creating dynamic and visually appealing front-end projects using React and Tailwind CSS. Developing interactive UI components and ensuring seamless user experiences. Currently exploring backend development and Next.js to expand full-stack capabilities.",
  },
];

export default function Experience() {
  return (
    <div className="mb-20 md:mb-40">
      <h2 className="text-3xl text-center text-gray-800 dark:text-white">My Experience</h2>
      <section className="py-10 dark:bg-gray-900">
        <div className="container mx-auto px-5">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex gap-4 items-start transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
