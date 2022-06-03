import { useEffect, useState } from 'react';
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const testInfors = [
    { name: 'ahihi1', to: '/a' },
    { name: 'aizz chết tiệt', to: '/a' },
    { name: 'Javascript', to: '/a' },
    { name: 'This is frontend', to: '/a' },
];

const Search = ({
    width,
    height,
    placeholder,
    filterSearch = false,
    FilterSearchIcon,
    data,
    dataKey,
}) => {
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        window.onclick = (e) => {
            if (e.target.outerHTML.startsWith('<input')) {
                if (e.target.outerHTML.includes('search')) {
                    setIsFocused(true);
                }
            } else {
                setIsFocused(false);
            }
        };
    }, []);

    const handleSearch = (data) => {
        setText(data.target.value);
    };

    const handleClearText = () => {
        setText('');
    };

    return (
        <div style={{ width: width || filterSearch ? 625 : 500 }}>
            <label
                className=" flex items-center min-w-full w-[100%] relative md:min-w-[0]"
                style={{ height: height || 50 }}
            >
                <span className="sr-only">Search</span>
                <span
                    className="absolute inset-y-0 left-[6%] flex items-center"
                    style={{ transform: 'translateX(-50%)' }}
                >
                    <IoIosSearch className="text-[30px]" />
                </span>
                <input
                    autoComplete="off"
                    id="search"
                    className="placeholder:italic placeholder:text-slate-400 block bg-white h-full w-full border border-[#fff0] rounded-[5px] py-2 px-[12%] focus:outline-none focus:border-purple-600 focus:ring-1 text-base shadow-lg shadow-[#3333] font-medium"
                    placeholder={placeholder || 'Search for anything...'}
                    style={{ paddingRight: filterSearch && 'calc(37% + 10px)' }}
                    type="text"
                    maxLength="100"
                    value={text}
                    onChange={(e) => handleSearch(e)}
                />
                {text && (
                    <span
                        className="absolute inset-y-0 right-[6%] flex items-center"
                        style={{
                            transform: 'translateX(50%)',
                            right: filterSearch && 'calc(31% + 10px)',
                        }}
                    >
                        <IoIosClose
                            className="text-[30px] cursor-pointer"
                            onClick={() => handleClearText()}
                        />
                    </span>
                )}
                {filterSearch && (
                    <div className="absolute right-[10px] border-l-[2px]  h-[100%] w-[25%]  text-center flex items-center">
                        <span className="px-[10px]">
                            {FilterSearchIcon && (
                                <FilterSearchIcon
                                    className=" text-[30px]"
                                    style={{ right: 'calc(20% - 20px)' }}
                                />
                            )}
                        </span>
                        <select
                            defaultValue=""
                            className="bg-transparent outline-none grow h-[100%] overflow-hidden w-[65%]"
                        >
                            <option value="volvo" className="overflow-hidden">
                                Volvo
                            </option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                )}
            </label>
            {isFocused && (
                <div className="bg-[#fff] max-h-[400px] mt-[10px] rounded-[5px] flex flex-col text-[#333] overflow-y-auto  shadow-lg shadow-[#3333] font-medium z-50">
                    {}
                    {testInfors
                        .filter((testInfor) =>
                            testInfor.name
                                .toLowerCase()
                                .includes(text.toLowerCase()),
                        )
                        .map((testInfor, index) => (
                            <Link
                                to={testInfor.to}
                                className="px-[10px] hover:bg-[#99999950] cursor-pointer py-[5px]"
                                key={index}
                            >
                                {testInfor.name}
                            </Link>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Search;
