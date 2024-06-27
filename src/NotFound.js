import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>SORRY PAGE NOT FOUND </h2>
            <p> Go back to <Link to="/">HOMEPAGE</Link></p>
        </div>
     );
}
 
export default NotFound;