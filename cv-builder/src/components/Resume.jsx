import '../styles/resume.css';
import PropTypes from 'prop-types';

export default function Resume({ formData }) {
  const { personal, education, languages, experience } = formData;

  return (
    <div className='resume-div'>
      <div className='resume-sheet'>
        <div className="header-section">
          <h1>{personal.name}</h1>
          <div className="header-content">
            <p>{personal.address}</p>
            <p>|</p>
            <p>{personal.phone}</p>
            <p>|</p>
            <p>{personal.mail}</p>
          </div>
        </div>

        <hr />

        <div className="summary">
          <p>{personal.summary}</p>
        </div>

        <hr />

        <div className="body-section">
          <div className="body-left">
            <div className="skills-div">
              <h2>Skills</h2>
              <ul>
                {personal.skills.map((skill, index) => (
                   <li key={index}>{'•' + ' ' + skill}</li>
                ))}
              </ul>
            </div>

            <hr />

            <div className="education-div">
              <h2>Education</h2>
              <div className='clg-div'>
                <h3>{education.college}</h3>
                <div className="clg-details">
                  <p>{education.degree}</p>
                  <p className='passOut'>{education.passoutClg}</p>
                  <p className='gpa'>{education.gpaClg}</p>
                </div>
              </div>
              <div className='scl-div'>
                <div className="scl-details">
                  <h3>{education.school}</h3>
                  <p className='passOut'>{education.passoutScl}</p>
                  <p className='gpa'>{education.gpaScl}</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="languages-div">
              <h2>Languages Known</h2>
              <ul>
                {languages.map((language, index) => (
                  <li key={index}>{'•' + ' ' + language}</li>
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
                    <h3 className='company'>{exp.company}</h3>
                    <p className='bar'>|</p>
                    <p className='job'>{exp.job}</p>
                    <p className='duration'>{exp.duration}</p>
                    <p className='location'>{exp.location}</p>
                    <div className='ach-div'>
                      <h4>Achievements:</h4>
                      <ul>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{'•' + ' ' + achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="download-cv">
        <button className='download-btn'>Download</button>
      </div>
    </div>
  );
}

Resume.propTypes = {
  formData: PropTypes.object.isRequired,
};