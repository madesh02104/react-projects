import Personal from './Personal.jsx';
import Education from './Education.jsx';
import Languages from './Languages.jsx';
import Experience from './Experience.jsx';
import Links from './Links.jsx';
import PropTypes from 'prop-types';
import '../styles/form.css';

export default function Form({ formData, handlePersonalChange, handleEducationChange, handleLanguagesChange, handleExperienceChange, handleLinksChange }) {
  return (
    <form>
      <Personal personalData={formData.personal} handlePersonalChange={handlePersonalChange} />
      <Education educationData={formData.education} handleEducationChange={handleEducationChange} />
      <Languages languagesData={formData.languages} handleLanguagesChange={handleLanguagesChange} />
      <Experience experienceData={formData.experience} handleExperienceChange={handleExperienceChange} />
      <Links linksData={formData.links} handleLinksChange={handleLinksChange} />
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.object.isRequired,
  handlePersonalChange: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired,
  handleLanguagesChange: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
  handleLinksChange: PropTypes.func.isRequired,
};