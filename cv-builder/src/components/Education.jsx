import PropTypes from 'prop-types';

export default function Education({ educationData, handleEducationChange }) {
  return (
    <div className="education-div">
      <h1>Education</h1>
      <div className="details-list">
        <label htmlFor="college">College/University</label>
        <input 
          type="text" 
          id="college" 
          value={educationData.college} 
          onChange={(e) => handleEducationChange('college', e.target.value)} 
        />

        <label htmlFor="degree">Degree</label>
        <input 
          type="text" 
          id="degree" 
          value={educationData.degree} 
          onChange={(e) => handleEducationChange('degree', e.target.value)} 
        />

        <label htmlFor="passout-clg">Passed out on</label>
        <input 
          type="text" 
          id="passout-clg" 
          value={educationData.passoutClg} 
          onChange={(e) => handleEducationChange('passoutClg', e.target.value)} 
        />

        <label htmlFor="gpa-clg">Percentage/GPA</label>
        <input 
          type="text" 
          id="gpa-clg" 
          value={educationData.gpaClg} 
          onChange={(e) => handleEducationChange('gpaClg', parseFloat(e.target.value) || '')} 
        />

        <label htmlFor="school">Schooling</label>
        <input 
          type="text" 
          id="school" 
          value={educationData.school} 
          onChange={(e) => handleEducationChange('school', e.target.value)} 
        />

        <label htmlFor="passout-scl">Passed out on</label>
        <input 
          type="text" 
          id="passout-scl" 
          value={educationData.passoutScl} 
          onChange={(e) => handleEducationChange('passoutScl', e.target.value)} 
        />

        <label htmlFor="gpa-scl">Percentage/GPA</label>
        <input 
          type="text" 
          id="gpa-scl" 
          value={educationData.gpaScl} 
          onChange={(e) => handleEducationChange('gpaScl', parseFloat(e.target.value) || '')} 
        />
      </div>
    </div>
  );
}

Education.propTypes = {
  educationData: PropTypes.shape({
    college: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    passoutClg: PropTypes.string.isRequired,
    gpaClg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    school: PropTypes.string.isRequired,
    passoutScl: PropTypes.string.isRequired,
    gpaScl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
  handleEducationChange: PropTypes.func.isRequired,
};
