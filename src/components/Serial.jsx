import PropTypes from "prop-types";

const Serial = ({ele}) => {
    return (
        <div className="ml-6">
            <p className="ml-6">{ ele}</p>
        </div>
    );
};

export default Serial;

Serial.propTypes = {
    ele: PropTypes.string,
  };
  