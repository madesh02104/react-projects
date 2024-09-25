import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Links({ linksData, handleLinksChange }) {
  const [links, setLinks] = useState(linksData);

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
    handleLinksChange(updatedLinks);
  };

  const handleAddLinks = (e) => {
    e.preventDefault();
    setLinks([...links, { url: '', description: '' }]);
    handleLinksChange([...links, { url: '', description: '' }]);
  };

  return (
    <div className="links-div">
      <h1>External Links</h1>
      <div className="details-list">
        {links.map((link, index) => (
          <div key={index} className="link-inputs">
            <input
              type="text"
              placeholder="Enter link description"
              value={link.description}
              onChange={(e) => handleLinkChange(index, 'description', e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter link URL"
              value={link.url}
              onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
            />
          </div>
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
