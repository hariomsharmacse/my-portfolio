interface Experience {
  role: string;
  company: string;
  duration: string;
  shortDescription: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    role: "CSR & Tech Operations Lead",
    company: "Gau Seva Dham Hospital & Research Centre",
    duration: "Feb 2024 - Present",
    shortDescription: "Overseeing technical operations and driving CSR initiatives to support hospital growth.",
    details: [
      "Overseeing all technical operations, including troubleshooting hardware & software issues.",
      "Coordinating CSR activities to support animal welfare and hospital outreach programs.",
      "Developing digital strategies to enhance the hospital's online presence.",
      "Improving systems and workflows for maximum efficiency.",
    ],
  },
  {
    role: "Web Research Analyst",
    company: "Damco Group",
    duration: "Jan 2021 - Feb 2024",
    shortDescription: "Conducted in-depth research to extract and validate high-quality data.",
    details: [
      "Performed extensive web research to extract and validate crucial business data.",
      "Developed strategic insights to aid decision-making.",
      "Ensured data integrity and accuracy through rigorous quality checks.",
      "Optimized research methodologies for efficiency and precision.",
    ],
  },
  {
    role: "Warehouse Executive",
    company: "HeyDay Care Private Limited",
    duration: "Jun 2019 - Dec 2020",
    shortDescription: "Managed warehouse operations, ensuring seamless inventory flow.",
    details: [
      "Optimized inventory workflows and stock management.",
      "Maintained precise records to enhance logistical efficiency.",
      "Collaborated with teams for on-time order fulfillment.",
    ],
  },
  {
    role: "MERN Stack Developer (Learning)",
    company: "Self-Learning",
    duration: "2023 - 2024",
    shortDescription: "Developing full-stack applications using modern web technologies.",
    details: [
      "Building interactive UI components with React and Tailwind CSS.",
      "Exploring backend development with Node.js and Express.",
      "Learning Next.js for enhanced full-stack capabilities.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="mb-20 md:mb-40 px-5">
      <h2 className="text-3xl text-center mb-6 text-gray-800 dark:text-white">
        My Experience
      </h2>
      <section className="py-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-md shadow-md text-sm">
                {exp.duration}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {exp.company}
                </p>
                <p className="text-md italic text-gray-700 dark:text-gray-400">
                  {exp.shortDescription}
                </p>
                <details className="mt-4 cursor-pointer bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-600">
                  <summary className="font-semibold text-lg text-center">View Details</summary>
                  <ul className="mt-3 list-disc list-inside text-gray-800 dark:text-gray-200">
                    {exp.details.map((point, idx) => (
                      <li key={idx} className="py-1">{point}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
