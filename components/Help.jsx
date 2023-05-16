import React from "react";

const Help = ({commands}) => {
    return (
        <div className="flex flex-col w-full">
            <div>If you want to know more about me, type:</div>
            {commands.map((command, index) => (
                <div key={index} className="flex flex-row w-full">
                    <p className="mr-2 w-1/6">
                        {command.command.toUpperCase()}
                    </p>
                    <p className="">{command.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Help;
