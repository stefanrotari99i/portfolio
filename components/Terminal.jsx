"use client";
import { useEffect, useState, useRef } from "react";
import TerminalHeaderBar from "./TerminalHeaderBar";
import TerminalInput from "./TerminalInput";
import About from "./About";
import Help from "./Help";
import Skills from "./Skills";
import Contact from "./Contact";

const AVAILABLE_COMMANDS = [
    {
        command: "HELP",
        description: "Show available commands",
    },
    {
        command: "ABOUT",
        description: "Show information about me",
    },
    {
        command: "SKILLS",
        description: "Show my skills",
    },
    {
        command: "CONTACT",
        description: "Show my contact information",
    },
    {
        command: "CLEAR",
        description: "Clear the terminal",
    },
    {
        command: "EXIT",
        description: "Close the terminal",
    },
];

const ABOUT_ME = [
    "Hello, my name is Rotari Stefan and I am a full-stack web developer.",
    "I am a self-taught programmer and I have been programming for about 2 years.",
    "I am passionate about programming and I am always looking to learn new things.",
    "I am a very ambitious person and I always try to do my best.",
    "I am a very sociable person and I like to work in a team.",
    "I am a very responsible person and I always try to finish my work on time.",
    "I am a very organized person and I always try to keep my work organized.",
    "I am a very creative person and I always try to find new solutions to problems.",
    "I am a very patient person and I always try to understand the problems of others.",
    "I am a very determined person and I always try to achieve my goals.",
    "I am a very positive person and I always try to see the good in everything.",
];

const MY_SKILLS = [
    {
        title: "Frontend",
        skills: [
            {
                title: "HTML",
                level: 90,
            },
            {
                title: "CSS",
                level: 90,
            },
            {
                title: "JavaScript",
                level: 90,
            },
            {
                title: "React.js",
                level: 90,
            },
            {
                title: "Next.js",
                level: 90,
            },
            {
                title: "Tailwind CSS",
                level: 90,
            },
            {
                title: "Bootstrap",
                level: 90,
            },
            {
                title: "Material UI",
                level: 90,
            },
            {
                title: "SASS",
                level: 90,
            },
            {
                title: "Styled Components",
                level: 90,
            },
            {
                title: "Redux",
                level: 90,
            },
            {
                title: "React Router",
                level: 90,
            },
            {
                title: "React Context",
                level: 90,
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                title: "Node.js",
                level: 90,
            },
            {
                title: "Express.js",
                level: 90,
            },
            {
                title: "MongoDB",
                level: 90,
            },
            {
                title: "Mongoose",
                level: 90,
            },
        ],
    },
    {
        title: "Other",
        skills: [
            {
                title: "Git",
                level: 90,
            },
            {
                title: "GitHub",
                level: 90,
            },
            {
                title: "GitLab",
                level: 90,
            },
            {
                title: "Linux",
                level: 90,
            },
            {
                title: "Windows",
                level: 90,
            },
            {
                title: "Visual Studio Code",
                level: 90,
            },
            {
                title: "Figma",
                level: 90,
            },
            {
                title: "Adobe Photoshop",
                level: 90,
            },
            {
                title: "Adobe Illustrator",
                level: 50,
            },
        ],
    },
];

const CONTACT_INFORMATION = [
    {
        title: "Email",
        value: "stefan.rotari99i@gmail.com",
    },
    {
        title: "Phone",
        value: "+373 78 888 888",
    },
    {
        title: "LinkedIn",
        value: "https://www.linkedin.com/in/rotari-stefan/",
    },
    {
        title: "GitHub",
        value: "https://gihub.com/rotari-stefan",
    },
    {
        title: "GitLab",
        value: "https://gitlab.com/rotari.stefan",
    },
    {
        title: "Facebook",
        value: "https://www.facebook.com/rotari.stefan",
    },
    {
        title: "Instagram",
        value: "https://www.instagram.com/rotari.stefan/",
    },
    {
        title: "Twitter",
        value: "https://twitter.com/rotari_stefan",
    },
];

const Terminal = () => {
    const [command, setCommand] = useState("");
    const [placeholder, setPlaceholder] = useState("");
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [cursor, setCursor] = useState(0);
    const ref = useRef(null);

    const COMMANDS = {
        HELP: () => <Help commands={AVAILABLE_COMMANDS} />,
        ABOUT: () => <About about={ABOUT_ME} />,
        SKILLS: () => <Skills skills={MY_SKILLS} />,
        CONTACT: () => <Contact contact={CONTACT_INFORMATION} />,
        EXIT: () => {
            window.close();
        },
        CLEAR: () => {
            setHistory([]);
            setCommand("");
            setHistoryIndex(0);
            setCursor(0);
        },
        MESSAGE: () => {},
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setHistory([...history, command]);
            setCommand("");
            setHistoryIndex(history.length + 1);
            setCursor(0);
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1);
                setCommand(history[historyIndex - 1]);
            }
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex < history.length) {
                setHistoryIndex(historyIndex + 1);
                setCommand(history[historyIndex + 1]);
            }
        }
        if (e.key === "Tab") {
            e.preventDefault();
            setCommand(command + "    ");
        }
    };

    const handleChange = (e) => {
        setCommand(e.target.value);
        setCursor(e.target.selectionStart);
        setPlaceholder("");
    };

    useEffect(() => {
        document.getElementById("command").selectionStart = cursor;
        document.getElementById("command").selectionEnd = cursor;
    }, [cursor]);

    useEffect(() => {
        document.getElementById("command").focus();
    }, []);

    useEffect(() => {
        document.getElementById("terminal").scrollTop =
            document.getElementById("terminal").scrollHeight;

        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.key === "c") {
                setHistory([...history, command]);
                setCommand("");
                setHistoryIndex(history.length + 1);
                setCursor(0);
            }
        });
    }, [history]);

    return (
        <div className=" w-full">
            <TerminalHeaderBar />
            <div className="flex flex-col mb-2">
                <p className="text-white text-lg">
                    Rotari Stefan Portfolio [Version 1.0.0]
                </p>
                <p className="text-white text-lg">
                    (c) Rotari Stefan. All rights reserved.
                </p>
            </div>
            <div id="terminal" className=" text-white w-full">
                {history.map((command, index) => (
                    <div key={index} className="flex-col w-full">
                        <div className="flex flex-row">
                            <p className="text-green-500 text-lg">
                                guest@rotaristefan:~$
                            </p>
                            <div className="flex-grow">
                                <p className="text-white text-lg ml-2">
                                    {command}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            <p className="text-white text-lg w-full">
                                {COMMANDS[command.toUpperCase()]
                                    ? COMMANDS[command.toUpperCase()]()
                                    : "Command not found. Type HELP to see available commands."}
                            </p>
                        </div>
                    </div>
                ))}
                <TerminalInput
                    ref={ref}
                    command={command}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default Terminal;
