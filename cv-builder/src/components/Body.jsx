import { useState } from 'react';
import Form from './Form.jsx';
import Resume from './Resume.jsx';
import '../styles/body.css';

export default function Body() {
  const [formData, setFormData] = useState({
    personal: { name: '', address: '', phone: '', mail: '', summary: '', skills: ['', '', '', ''] },
    education: { college: '', degree: '', passoutClg: '', gpaClg: '', school: '', passoutScl: '', gpaScl: '' },
    languages: ['', ''],
    experience: [
      {
        company: '',
        job: '',
        duration: '',
        location: '',
        achievements: [''],
      },
    ],
  });

  // Handler to update personal details
  const handlePersonalChange = (updatedPersonal) => {
    setFormData((prevData) => ({ ...prevData, personal: updatedPersonal }));
  };

  // Handler to update education details
  const handleEducationChange = (updatedEducation) => {
    setFormData((prevData) => ({ ...prevData, education: updatedEducation }));
  };

  // Handler to update languages
  const handleLanguagesChange = (updatedLanguages) => {
    setFormData((prevData) => ({ ...prevData, languages: updatedLanguages }));
  };

  // Handler to update experience
  const handleExperienceChange = (updatedExperience) => {
    setFormData((prevData) => ({ ...prevData, experience: updatedExperience }));
  };

  return (
    <div className="body-container">
      <Form
        formData={formData}
        handlePersonalChange={handlePersonalChange}
        handleEducationChange={handleEducationChange}
        handleLanguagesChange={handleLanguagesChange}
        handleExperienceChange={handleExperienceChange}
      />
      <Resume formData={formData} />
    </div>
  );
}
