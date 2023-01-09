import React from "react";

export default function navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-md bg-white z-3">
                <div class="container-fluid">
                    <a class="navbar-brand p-0 m-0" >
                        <img src="/PunchClean 1.svg" width="200px" height="100px"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav  ">
                        <li className="nav-item">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a class="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}