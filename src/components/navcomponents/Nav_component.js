import React from 'react';
import './nav_style_log.css';
import { Link } from 'react-router-dom';

function NavComponent(){
    return (
        <div>
            <nav >
        <div class="logo mt-2">
            <h3>Cycle_Register</h3>
        </div>
        <ul class="nav-links my-auto mr-5">
            <li>
                <a href="#">FAQ</a>
            </li>
        </ul>
    </nav>
        </div>
    );
}

export default NavComponent;