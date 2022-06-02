import { useState } from 'react';
import { IoIosSearch, IoIosClose } from 'react-icons/io';

const Search = ({ width, height, placeholder, className }) => {
    const [text, setText] = useState('');

    const handleSearch = (data) => {
        setText(data.target.value);
    };

    const handleClearText = () => {
        setText('');
    };

    return (
        <label className="relative w-[500px] h-[50px] flex items-center min-w-full  md:min-w-[0]">
            <span className="sr-only">Search</span>
            <span
                className="absolute inset-y-0 left-[6%] flex items-center"
                style={{ transform: 'translateX(-50%)' }}
            >
                <IoIosSearch className="text-[30px]" />
            </span>
            <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white h-full w-full border border-[#fff0] rounded-[5px] py-2 px-[12%] focus:outline-none focus:border-purple-600 focus:ring-1 text-base shadow-lg shadow-[#3333] font-medium"
                placeholder="Search for anything..."
                type="text"
                value={text}
                onChange={(e) => handleSearch(e)}
            />
            {text && (
                <span
                    className="absolute inset-y-0 right-[6%] flex items-center"
                    style={{ transform: 'translateX(50%)' }}
                >
                    <IoIosClose
                        className="text-[30px] cursor-pointer"
                        onClick={() => handleClearText()}
                    />
                </span>
            )}
        </label>
    );
};

export default Search;
