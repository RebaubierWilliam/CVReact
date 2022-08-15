import './Center.scss';
import { useState } from "react";
export default function Center() {
    const [toggleState, setToggleState] = useState(1);
    const toggleOnglet = (index) => {
        setToggleState(index);
    };
    return (
        <div className="center__conteneur">
            <div className="bloc-onglets">
                <button className={toggleState === 1 ? "onglets active-onglets" : "onglets"}
                    onClick={() => toggleOnglet(1)}>
                    Information
                </button>
                <button className={toggleState === 2 ? "onglets active-onglets" : "onglets"}
                    onClick={() => toggleOnglet(2)}>
                    Expérience
                </button>
                <button className={toggleState === 3 ? "onglets active-onglets" : "onglets"}
                    onClick={() => toggleOnglet(3)}>
                    Framework
                </button>
                <button className={toggleState === 4 ? "onglets active-onglets" : "onglets"}
                    onClick={() => toggleOnglet(4)}>
                    Contact
                </button>
            </div>
        </div>
    );
}