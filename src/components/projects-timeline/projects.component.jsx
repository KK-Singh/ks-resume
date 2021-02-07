
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Project = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <div id="accordion">

                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapseOne">
                            Risk Game 2019
                        </a>
                    </div>
                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                        <div class="card-body">
                            Developed a Risk Game in java using MVP architecture.
                            Used multiple design patterns like: Observer Pattern, Singleton Pattern and Strategy Pattern.
                            <p /> Programming language used:  Java
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                            Distributed Event Management System 2019
                    </a>
                    </div>
                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            Highly available distributed system by implementing a replication and master slave architecture.
                            Implemented voting mechanism to give user the correct results for their requests.
                            <p /> Programming language used:  Java
                         </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                            Implementation of HTTP- protocols 2019
                         </a>
                    </div>
                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            Implemented HTTP protocols from scratch using TCP socket API with a client server Application.
                            Implemented GET/POST methods from scratch.
                            <p /> Programming language used:  Python
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Project;