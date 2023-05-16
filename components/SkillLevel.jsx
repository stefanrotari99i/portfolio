"use client"
import { useEffect, useState } from "react";

const SkillLevel = ({ level }) => {
    const [skillLevel, setSkillLevel] = useState(0);

    const getLevel = () => {
        switch (level) {
            case 30:
                return "text-red-500";
            case 50:
                return "text-yellow-500";
            case 70:
                return "text-green-500";
            default:
                return "text-green-500";
        }
    };

    // loading animation
    useEffect(() => {
        const interval = setInterval(() => {
            if (skillLevel < level / 10) {
                setSkillLevel((skillLevel) => skillLevel + 1);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [skillLevel, level]);

    


    return (
        <div className="flex items-center">
            <span>[</span>
            {skillLevel &&
                [...Array(skillLevel)].map((e, i) => {
                    return (
                        <span key={i} className={getLevel()}>
                            #
                        </span>
                    );
                })}
            {skillLevel &&
                [...Array(10 - skillLevel)].map((e, i) => {
                    return (
                        <span key={i + skillLevel} className={"text-gray-400"}>
                            ~
                        </span>
                    );
                })}
            <span>]</span>
            <span className="ml-2 text-gray-400">{skillLevel * 10}%</span>
        </div>
    );
};

export default SkillLevel;
