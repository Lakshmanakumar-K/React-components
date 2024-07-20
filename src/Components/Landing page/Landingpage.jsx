import "./Landingpage.css"
import propTypes from "prop-types"

const Landingpage = ({ description, ht }) => {
    return (
        <div className="landingpage_parent">
            <div className="landingpage_child">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5wXYhJlMD6qkKDFSirz6rHfz63D5O3459Q&s" alt="" width="100%" height={ht}></img>
                <div className="landingpage_content">
                    <p className="landingpage_para"><b>{description}</b></p>
                    <form>
                        <input className="landingpage_input" type="email" name="email" id="email" value="Email Address" required></input>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="landingpage_button" >Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
}

Landingpage.propTypes = {
    description: propTypes.string,
    ht: propTypes.string
}

export default Landingpage