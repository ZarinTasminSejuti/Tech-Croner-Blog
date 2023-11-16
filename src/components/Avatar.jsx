import PropTypes from "prop-types";

const Avatar = ({ele}) => {
    return (
        <div className="ml-6">
            <img src={ele} 
                className="w-10 h-10 rounded"/>
        </div>
    );
};

export default Avatar;

Avatar.propTypes = {
    ele: PropTypes.string,
  };
  