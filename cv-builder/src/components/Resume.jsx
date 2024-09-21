import '../styles/resume.css';
import PropTypes from 'prop-types';
export default function Resume({ formData}) {
  const { personal, education, languages, experience } = formData;

  return (
    <div className='resume-div'>
      <div className='resume-sheet'>
        <div className="header-section">
          <h1>{personal.name}</h1>
          <div className="header-content">
            <p>{personal.address}</p>
            <p>{personal.phone}</p>
            <p>{personal.mail}</p>
          </div>
        </div>

        <div className="summary">
          <h4>Summary</h4>
          <p>{personal.summary}</p>
        </div>

        <div className="body-section">
          <div className="body-left">
            <div className="skills-div">
              <h2>Skills</h2>
              <ul>
                {personal.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="education-div">
              <h2>Education</h2>
              <div className='clg-div'>
                <h3>{education.college}</h3>
                <p>{education.degree}</p>
                <p>{education.passoutClg}</p>
                <p>{education.gpaClg}</p>
              </div>
              <div className='scl-div'>
                <h3>{education.school}</h3>
                <p>{education.passoutScl}</p>
                <p>{education.gpaScl}</p>
              </div>
            </div>

            <div className="languages-div">
              <h2>Languages Known</h2>
              <ul>
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="body-right">
            <div className="experience-div">
              <h2>Experience</h2>
              <ul>
                {experience.map((exp, index) => (
                  <li key={index}>
                    <h3>{exp.company}</h3>
                    <p>{exp.role}</p>
                    <p>{exp.duration}</p>
                    <p>{exp.description}</p>
                    <p>{exp.achievements}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Resume.propTypes = {
  formData: PropTypes.object.isRequired,
};
