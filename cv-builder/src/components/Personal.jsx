import { useState } from 'react';
import PropTypes from 'prop-types';


export default function Personal({ personalData, handlePersonalChange }) {
  const [skills, setSkills] = useState(personalData.skills);

  const handleInputChange = (e) => {
    handlePersonalChange({ ...personalData, [e.target.id]: e.target.value });
  };

  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
    handlePersonalChange({ ...personalData, skills: updatedSkills });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    setSkills([...skills, '']);
    handlePersonalChange({ ...personalData, skills: [...skills, ''] });
  };

  return (
    <div className='personal-div'>
      <h1>Personal</h1>
      <div className='details-list'>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' value={personalData.name} onChange={handleInputChange} />

        <label htmlFor="address">Address</label>
        <input type="text" id='address' value={personalData.address} onChange={handleInputChange} />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id='phone' value={personalData.phone} onChange={handleInputChange} />

        <label htmlFor="mail">Mail</label>
        <input type="email" id='mail' value={personalData.mail} onChange={handleInputChange} />

        <label htmlFor="summary">Summary</label>
        <textarea id='summary' value={personalData.summary} onChange={handleInputChange} />

        <div className="skills-div">
          <label>Skills</label>
          <div className="skill-inputs">
            {skills.map((skill, index) => (
              <input
                key={index}
                type="text"
                value={skill}
                onChange={(e) => handleSkillsChange(index, e.target.value)}
              />
            ))}
          </div>
          <button onClick={handleAddSkill} className="add-skill-btn">+ New Skill</button>
        </div>
      </div>
    </div>
  );
}

Personal.propTypes = {
  personalData: PropTypes.object.isRequired,
  handlePersonalChange: PropTypes.func.isRequired,
};


