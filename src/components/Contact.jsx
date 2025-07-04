import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="section">
      <h2>📬 Contact</h2>
      <ul className="contact-icons">
        <li>
          <a href="mailto:muthuvengadesh39@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/muthuvengadesh40" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/muthu-vengadesh-b4914b25a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
