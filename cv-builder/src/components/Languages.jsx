import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Languages({ languagesData, handleLanguagesChange }) {
  const [languages, setLanguages] = useState(languagesData);

  const handleLanguageChange = (index, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = value;
    setLanguages(updatedLanguages);
    handleLanguagesChange(updatedLanguages);
  };

  const handleAddLanguage = (e) => {
    e.preventDefault();
    setLanguages([...languages, '']);
    handleLanguagesChange([...languages, '']);
  };

  return (
    <div className="languages-div">
      <h1>Languages Known</h1>
      <div className="details-list">
        {languages.map((language, index) => (
          <input
            key={index}
            type="text"
            value={language}
            onChange={(e) => handleLanguageChange(index, e.target.value)}
          />
        ))}
      </div>
      <button onClick={handleAddLanguage} className="add-language-btn">+ New Language</button>
    </div>
  );
}

Languages.propTypes = {
  languagesData: PropTypes.array.isRequired,
  handleLanguagesChange: PropTypes.func.isRequired,
};