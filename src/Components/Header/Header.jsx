import "./Header.css"
import Landingpage from "../Landing page/Landingpage.jsx"
import Content from "../Content/Content.jsx"
import content from "./content.json"
import feature from "./feature.json"
import People from "../People/People.jsx"
import people from "./people.json"
import landingpage from "./Landingpage.json"
import Footer from "../Footer/Footer.jsx"

const Header = () => {
    return (
        <>
            <div className="header_parent">
                <h3>Start Bootstrap</h3>
                <button className="btn">Sign Up</button>
            </div>
            <Landingpage key={landingpage[0].id}
                description={landingpage[0].description}
                ht={landingpage[0].height}
            />
            < div className="content_flex">
                {content.map((obj) => (
                    <Content id={obj.id}
                        key={obj.id}
                        title={obj.title}
                        image={obj.image}
                        description={obj.description}
                        imageposition={obj.imageposition}
                    />
                )
                )
                }
            </div>
            <div className="featureflex">
                {feature.map((ob) => (
                    <Content id={ob.id}
                        key={ob.id}
                        title={ob.title}
                        image={ob.image}
                        description={ob.description}
                        imageposition={ob.imageposition}
                    />
                ))}
            </div>
            <div className="line_flex"><h2>What people are saying...</h2></div >
            <div className="people_flex">
                {people.map((obj) => (
                    <People
                        key={obj.id}
                        image={obj.image}
                        person={obj.name}
                        description={obj.description}
                    />
                ))}
            </div>
            <Landingpage key={landingpage[1].id}
                description={landingpage[1].description}
                ht={landingpage[1].height}
            />
            <Footer />
        </>
    );
}

export default Header;