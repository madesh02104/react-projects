import { useState } from 'react';
import Form from './Form.jsx';
import Resume from './Resume.jsx';
import '../styles/body.css';

export default function Body() {
  const [formData, setFormData] = useState({
    personal: { name: '', address: '', phone: '', mail: '', summary: '', skills: ['', '', '', ''] },
    education: {
      college: '',
      degree: '',
      passoutClg: '',
      gpaClg: '',
      school: '',
      passoutScl: '',
      gpaScl: '',
    },
    experience: [{ company: '', job: '', duration: '', location: '', achievements: [''] }],
    languages: ['', ''],
  });

  const handleEducationChange = (field, value) => {
    setFormData({
      ...formData,
      education: {
        ...formData.education,
        [field]: value,
      },
    });
  };


  return (
    <div className="body-container">
      <Form formData={formData} handleEducationChange={handleEducationChange} />
      <Resume formData={formData} />
    </div>
  );
}
