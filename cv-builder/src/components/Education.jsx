import PropTypes from 'prop-types';

export default function Education({ educationData, handleEducationChange }) {
  const handleInputChange = (e) => {
    handleEducationChange({ ...educationData, [e.target.id]: e.target.value });
  };

  return (
    <div className="education-div">
      <h1>Education</h1>
      <div className="details-list">
        <label htmlFor="college">College/University</label>
        <input type="text" id="college" value={educationData.college} onChange={handleInputChange} />

        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" value={educationData.degree} onChange={handleInputChange} />

        <label htmlFor="passout-clg">Passed out on</label>
        <input type="text" id="passout-clg" value={educationData.passoutClg} onChange={handleInputChange} />

        <label htmlFor="gpa-clg">Percentage/GPA</label>
        <input type="number" id="gpa-clg" value={educationData.gpaClg} onChange={handleInputChange} />

        <label htmlFor="school">Schooling</label>
        <input type="text" id="school" value={educationData.school} onChange={handleInputChange} />

        <label htmlFor="passout-scl">Passed out on</label>
        <input type="text" id="passout-scl" value={educationData.passoutScl} onChange={handleInputChange} />

        <label htmlFor="gpa-scl">Percentage/GPA</label>
        <input type="number" id="gpa-scl" value={educationData.gpaScl} onChange={handleInputChange} />
      </div>
    </div>
  );
}

Education.propTypes = {
  educationData: PropTypes.shape({
    college: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    passoutClg: PropTypes.string.isRequired,
    gpaClg: PropTypes.number.isRequired,
    school: PropTypes.string.isRequired,
    passoutScl: PropTypes.string.isRequired,
    gpaScl: PropTypes.number.isRequired,
  }).isRequired,
  handleEducationChange: PropTypes.func.isRequired,
};