import { Typewriter } from 'react-simple-typewriter';

export default function Header() {
  return (
    <center>
    <div className="hero">
      <h1 className="intro">
        <Typewriter
          words={[
            'Hi, I’m Muthuvengadesh',
            'Web Developer',
            'Java Developer',
            'Linux Enthusiast'
          ]}
          loop={true}
          cursor
          cursorStyle="⌨"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
    </center>
  );
}