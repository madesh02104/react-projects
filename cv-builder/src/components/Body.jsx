import { useState } from 'react';
import Form from './Form.jsx';
import Resume from './Resume.jsx';
import '../styles/body.css';

export default function Body() {
  const [formData, setFormData] = useState({
    personal: { 
      name: 'John Doe',
      address: 'Georgia, USA',
      phone: '7904866020', 
      mail: 'johndoe@gmail.com', 
      summary: 'Highly skilled and results-driven Software Developer with 5+ years of experience in designing, developing, and deploying robust applications. Adept at working in Agile environments, collaborating with cross-functional teams, and consistently delivering high-quality code. Passionate about problem-solving and staying updated with the latest technologies to drive innovation and efficiency in development processes. Proven track record in improving application performance and user experience through optimized code and best practices.', 
      skills: ['Languages : HTML, CSS, JavaScript, C++, Python, Java', 'Frameworks/Libraries : React, Express, Svelte', 'Tools : Git, Webpack, Jest, Babel', 'Database : MogoDB, PostgreSQL'] 
    },
    education: { 
      college: 'Harvard University', 
      degree: 'A.B. Computer Science', 
      passoutClg: 'June-2019', 
      gpaClg: '8.73 gpa', 
      school: 'Georgia state public school', 
      passoutScl: 'May-2015', 
      gpaScl: '92%' 
    },
    languages: ['English', 'French'],
    experience: [
      {
        company: 'Google',
        job: 'Software Engineer',
        duration: 'July 2019 - Present',
        location: 'Mountain View, California',
        achievements: [
          'Optimized application performance, reducing load times by 40% through code refactoring and implementation of efficient algorithms.',
          'Led a team of 5 developers in building a cross-platform mobile app that increased user engagement by 30% within 6 months.',
          'Developed and deployed a scalable microservices architecture, improving system reliability and reducing downtime by 20%.'
        ],
      },
    ],
    links: ['linkedin.com','x.com','"https://github.com'],
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

  // Handler to update links
  const handleLinksChange = (updatedLinks) => {
    setFormData((prevData) => ({ ...prevData, links: updatedLinks }));
  };

  return (
    <div className="body-container">
      <Form
        formData={formData}
        handlePersonalChange={handlePersonalChange}
        handleEducationChange={handleEducationChange}
        handleLanguagesChange={handleLanguagesChange}
        handleExperienceChange={handleExperienceChange}
        handleLinksChange={handleLinksChange}
      />
      <Resume formData={formData} />
    </div>
  );
}
