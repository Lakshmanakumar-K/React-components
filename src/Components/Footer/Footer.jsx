import "./Footer.css"

const Footer = () => {
    return (<div className="footer_flex">
        <div className="footer_link">
            <a className="footer_anchor" href="">About</a>
            &nbsp;&nbsp;
            <p className="footer_dot">.</p>
            &nbsp;&nbsp;
            <a className="footer_anchor" href="">Contact</a>
            &nbsp;&nbsp;
            <p className="footer_dot">.</p>
            &nbsp;&nbsp;
            <a className="footer_anchor" href="">Terms of Use</a>
            &nbsp;&nbsp;
            <p className="footer_dot">.</p>
            &nbsp;&nbsp;
            <a className="footer_anchor" href="">Privacy Policy</a>
            &nbsp;&nbsp;
            <p className="footer_dot">.</p>
            &nbsp;&nbsp;
            <p>© Your Website 2023. All Rights Reserved.</p>
        </div>
        <div className="footer_icon">
            <button className="footer_button"><i className="fa fa-facebook-official" aria-hidden="true"></i></button>
            <button className="footer_button"><i className="fa fa-twitter" aria-hidden="true"></i></button>
            <button className="footer_button"><i className="fa fa-instagram" aria-hidden="true"></i></button>
        </div>
    </div >);
}

export default Footer