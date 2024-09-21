import '../styles/resume.css';
import PropTypes from 'prop-types';


export default function Resume({ formData }) {
  const { personal, education, languages, experience } = formData;

  return (
    <div className="resume-div">
      <h1>{personal.name}</h1>
      <p>{personal.address}</p>
      <p>{personal.phone}</p>
      <p>{personal.mail}</p>
      <p>{personal.summary}</p>

      <h2>Skills</h2>
      <ul>
        {personal.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Education</h2>
      <div>
        <h3>College</h3>
        <p>{education.college}</p>
        <p>{education.degree}</p>
        <p>{education.passoutClg}</p>
        <p>{education.gpaClg}</p>

        <h3>School</h3>
        <p>{education.school}</p>
        <p>{education.passoutScl}</p>
        <p>{education.gpaScl}</p>
      </div>

      <h2>Languages Known</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>

      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.company}</h3>
          <p>{exp.job}</p>
          <p>{exp.duration}</p>
          <p>{exp.location}</p>
          <ul>
            {exp.achievements.map((achievement, achIndex) => (
              <li key={achIndex}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

Resume.propTypes = {
  formData: PropTypes.object.isRequired,
};
