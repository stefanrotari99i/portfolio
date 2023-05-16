import React from "react";

const TerminalInput = ({
    command,
    handleChange,
    handleKeyDown,
    placeholder,
    ref
}) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="text-green-500 text-lg">
                    guest@rotaristefan:~$
                </div>
                <div className="flex-grow">
                    <form className="flex flex-row">
                        <input
                            ref={ref}
                            id="command"
                            className="bg-black text-white text-lg ml-2 w-full focus:outline-none placeholder:text-gray-500"
                            value={command}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            autoFocus
                            autoComplete="off"
                            placeholder={placeholder}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TerminalInput;
