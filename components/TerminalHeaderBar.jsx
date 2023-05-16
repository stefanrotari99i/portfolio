const TerminalHeaderBar = () => {
    return (
        <div className="flex flex-row justify-between bg-black text-white w-full h-8">
            <div className="flex flex-row">
                <div className="bg-red-500 w-3 h-3 rounded-full m-1"></div>
                <div className="bg-yellow-500 w-3 h-3 rounded-full m-1"></div>
                <div className="bg-green-500 w-3 h-3 rounded-full m-1"></div>
            </div>
            <div className="flex flex-row">
                <div className="bg-black w-3 h-3 rounded-full m-1"></div>
                <div className="bg-black w-3 h-3 rounded-full m-1"></div>
                <div className="bg-black w-3 h-3 rounded-full m-1"></div>
            </div>
        </div>
    );
};

export default TerminalHeaderBar;
