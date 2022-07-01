import "../../App.scss";
import "../../App";
import { Link } from "react-router-dom";

function Sticky() {
    return (
        <div className="header">
            I'm Stickyy!!
            <button>
                <Link to="/people">People</Link>
            </button>
        </div>
    );
}
export default Sticky;
