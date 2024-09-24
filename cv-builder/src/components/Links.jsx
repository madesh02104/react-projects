import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Links({ linksData, handleLinksChange }) {
  const [links, setLinks] = useState(linksData);

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
    handleLinksChange(updatedLinks);
  };

  const handleAddLinks = (e) => {
    e.preventDefault();
    setLinks([...links, '']);
    handleLinksChange([...links, '']);
  };

  return (
    <div className="links-div">
      <h1>External Links</h1>
      <div className="details-list">
        {links.map((link, index) => (
          <input
            key={index}
            type="text"
            value={link}
            onChange={(e) => handleLinkChange(index, e.target.value)}
          />
        ))}
      </div>
      <button onClick={handleAddLinks} className="add-link-btn">+ New Link</button>
    </div>
  );
}

Links.propTypes = {
  linksData: PropTypes.array.isRequired,
  handleLinksChange: PropTypes.func.isRequired,
};