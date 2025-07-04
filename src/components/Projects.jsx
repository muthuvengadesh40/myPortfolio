export default function Projects() {
  const projects = [
    {
      title: "Smart Fan Controller (Embedded System)",
      desc: "Engineered an automated fan control system using Arduino Uno and a DHT11 sensor to monitor room temperature. The system adjusts fan speed dynamically based on sensor readings to maintain optimal comfort. Demonstrated proficiency in embedded systems and sensor integration.",
      tech: "Arduino, C, DHT11"
    },
    {
      title: "Online Bus Ticket System (Console App)",
      desc: "Developed a command-line bus ticket booking system in Java that manages seat allocation, fare calculation, and real-time ticket availability. Employed object-oriented principles and file handling to store user data and trip details persistently.",
      tech: "Java, OOPs, File Handling"
    },
    {
      title: "Chatbot using Gemini AI API",
      desc: "Created an intelligent chatbot integrated with the Gemini AI API to provide dynamic responses to user queries. Handled API requests/responses, state management, and frontend logic to simulate an interactive conversation experience.",
      tech: "ReactJS, Gemini API, JavaScript"
    },
    {
      title: "Local Deals & Discounts Web App",
      desc: "Designed a responsive web application for local businesses to post daily offers and discounts. Prioritized usability for vendors and customers with intuitive navigation and minimalistic UI. Focused on accessibility for low-tech users.",
      tech: "HTML, CSS, TypeScript, React.js, Supabase"
    },
    {
      title: "Online Quiz App (Java Backend)",
      desc: "Built a backend service in Java that supports quiz creation, user authentication, answer evaluation, and leaderboard display. Used JDBC to interact with MySQL for question storage and score tracking, enabling a complete quiz workflow.",
      tech: "Java, JDBC, MySQL"
    }
  ];

  return (
    <div className="section">
      <h2>🛠 Projects</h2>
      <div className="project-grid-boxes">
        {projects.map((proj, index) => (
          <div className="project-box" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <p><em>Tech Used:</em> {proj.tech}</p>
            {/* Optional GitHub link */}
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}