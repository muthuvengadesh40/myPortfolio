

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "PSNA College of Engineering and Technology",
    year: "2022 – 2026 (Pursuing)",
    details: "Currently pursuing bachelor's degree with focus on software development, data structures, and full-stack web technologies.",
  },
  {
    degree: "HSC – Class 12",
    institution: "Ponmani Matric Hr. Secondary School",
    year: "2021 – 2022",
    details: "Completed Higher Secondary under Tamil Nadu State Board with specialization in Computer Science and Mathematics.",
  },
  {
    degree: "SSLC – Class 10",
    institution: "Jayaseelan Matric Hr. Secondary School",
    year: "2020 – 2021",
    details: "Achieved excellent academic performance and actively participated in events and science exhibitions.",
  },
];

export default function Education() {
  return (
    <div className="section">
      <h2>🎓 Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="edu-card" key={index}>
            <h3>{edu.degree}</h3>
            <p><strong>{edu.institution}</strong></p>
            <span>{edu.year}</span>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}