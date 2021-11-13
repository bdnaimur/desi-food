import React from 'react';
import { FaBars } from 'react-icons/fa';
import styles from '../../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <nav class={`${styles.navbar_bg} navbar navbar-expand-lg text-white`}>
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><FaBars/></span>
                </button>
                <div class={`collapse navbar-collapse d-flex justify-content-between `} id="navbarNavAltMarkup">
                    <div>
                        <h6>Desi Food | Food on Weels</h6>
                    </div>
                    <div class="navbar-nav text-white">
                        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                        <a class="nav-link text-white" href="#">Features</a>
                        <a class="nav-link text-white" href="#">Pricing</a>
                        <a class="nav-link text-white" href="#">Features</a>
                        <a class="nav-link text-white" href="#">Pricing</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;