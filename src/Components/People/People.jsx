import "./People.css"
import propTypes from "prop-types"

const People = ({ image, person, description }) => {
    return (<div className="people_parent">

        <img className="people_image" src={image} alt=""></img>
        <div className="people_feature">
            <h4>
                {person}
            </h4>
            <p>
                {description}
            </p>
        </div>
    </div>);
}

People.propTypes = {
    image: propTypes.string,
    person: propTypes.string,
    description: propTypes.string
}

export default People

