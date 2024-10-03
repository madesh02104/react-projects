import PropTypes from "prop-types";
import '../styles/card.css';

const Card = ({ name, url, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
