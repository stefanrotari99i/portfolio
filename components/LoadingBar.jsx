import React from "react";

const LoadingBar = ({proccent}) => {
    return (
        <div className="flex items-center">
            <span>[</span>
            {[...Array(proccent)].map((e, i) => {
                return (
                    <span key={i} className={'text-green-500'}>
                        #
                    </span>
                );
            })}
            {[...Array(10 - proccent)].map((e, i) => {
                return (
                    <span key={i} className={"text-gray-400"}>
                        ~
                    </span>
                );
            })}
            <span>]</span>
            <span className="ml-2 text-gray-400">{level}%</span>
        </div>
    );
};

export default LoadingBar;
