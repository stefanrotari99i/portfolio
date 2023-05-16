import React from "react";

const About = ({ about }) => {


    return (
        <div className="flex flex-col w-full">
            {about.map((about, index) => (
                <p key={index}>{about}</p>
            ))}
        </div>
    );
};

export default About;
