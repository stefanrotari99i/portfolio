import SkillLevel from "./SkillLevel";

const Skills = ({skills}) => {
    return (
        <>
            <table className="w-full border-collapse border border-gray-500 my-4">
                <tr className="border-collapse border border-gray-500">
                    {skills.map((skill, index) => (
                        <th
                            key={index}
                            className="text-center border-collapse border border-gray-500"
                        >
                            {skill.title}
                        </th>
                    ))}
                </tr>
                <tr>
                    {skills.map((skill, index) => (
                        <td
                            key={index}
                            className="p-4 align-text-top text-center border-collapse border border-gray-500"
                        >
                            {skill.skills.map((skill, index) => (
                                <div
                                    className="flex flex-row items-center justify-between"
                                    key={index}
                                >
                                    <div className="flex-grow">
                                        <p className="text-left">
                                            {skill.title}
                                        </p>
                                    </div>
                                    <SkillLevel level={skill.level} />
                                </div>
                            ))}
                        </td>
                    ))}
                </tr>
            </table>
            <p className="text-yellow-500 text-lg">
                *The skill levels are based on my personal opinion.
            </p>
        </>
    );
};

export default Skills;
