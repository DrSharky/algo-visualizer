import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div style={{ width: 250, borderRight: "1px solid #ccc", padding: "1rem" }}>
            <h3>Problems</h3>
            <ul>
                <li>
                    <NavLink to="/sliding-window">Sliding Window</NavLink>
                </li>
                <li>
                    <NavLink to="/hash-map">Hash Map</NavLink>
                </li>
            </ul>
        </div>
    );
}