import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
    const [userText, setUserText] = useState("");

    return (



        <header className="header">
            <div className="logo">
                <h3 className="logo-title">
                    Anime<span>List</span>
                </h3>
            </div>

                {/* <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="btn-login">
                            <Link>
                                Entrar
                            </Link>
                        </li>
                    </ul>
                </nav> */}

                <input className="input-search" type="text"  placeholder="Pesquise um anime..." onChange={(e) => {setUserText(e.target.value)}}/>
        </header>
    )
}