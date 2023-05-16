const TerminalHeaderBar = () => {
    return (
        <div className="flex flex-row justify-between items-center bg-black text-white w-full h-8 mb-4">
            <div className="flex flex-row">
                <div className="bg-red-500 w-3 h-3 rounded-full m-1"></div>
                <div className="bg-yellow-500 w-3 h-3 rounded-full m-1"></div>
                <div className="bg-green-500 w-3 h-3 rounded-full m-1"></div>
            </div>
            <div className="hidden md:flex flex-row ml-auto mr-0 md:mr-auto">
                <p className="text-xs m-1">
                    <span className="text-red-500">●</span> master 
                </p>
            </div>
        </div>
    );
};

export default TerminalHeaderBar;
