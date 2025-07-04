import {
  SiC,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiLinux
} from 'react-icons/si';
import javaLogo from '../assets/java.png';
import './Skills.css';

const skills = [
  { icon: <SiC />, name: 'C' },
  { icon: <img src={javaLogo} alt="Java" className="skill-icon-img" />, name: 'Java' },
  { icon: <SiPython />, name: 'Python' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiLinux />, name: 'Linux' }
];

export default function Skills() {
  return (
    <div className="section">
      <h2>🧠 Skills</h2>
      <div className="icon-skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-icon-wrapper" key={index}>
            <div className="tooltip">{skill.name}</div>
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
}