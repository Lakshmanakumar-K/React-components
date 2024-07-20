import "./Content.css"
import propTypes from "prop-types"

const Content = ({ image, title, description, imageposition }) => {
    if (imageposition == "left") {
        return (<>
            <div className="image">
                <img className="feature_image" src={image} alt=""></img>
            </div>
            <div className="feature">
                <h3 className="feature_header">{title}</h3>
                <p className="feature_para">{description}</p>
            </div>
        </>);
    }
    else if (imageposition == "right") {
        return (
            <>
                <div className="feature">
                    <h3 className="feature_header">{title}</h3>
                    <p className="feature_para">{description}</p>
                </div>
                <div className="image">
                    <img className="feature_image" src={image} alt=""></img>
                </div>
            </>
        );
    }

    else {
        return (
            <div className="content_parent">
                <img className="content_image" src={image} alt=""></img>
                <h3 className="content_header">{title}</h3>
                <p className="content_para">{description}</p>
            </div>
        );
    }
}

Content.propTypes = {
    id: propTypes.string,
    image: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    imageposition: propTypes.string
}
export default Content