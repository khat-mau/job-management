import { useEffect, useState } from 'react';
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { getAllAddresses } from '../../api/getAddress';
import * as searchService from '../../api/search';
import { useDebounce } from '../../hooks';

const Search = ({
    className,
    width,
    height,
    placeholder,
    filterSearch = false,
    FilterSearchIcon,
    apiEnabled = true,
    // dataFilters = [],

    // data = [],
    // dataKeyName,

    // dataKeyTo,
}) => {
    const [text, setText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [addressSelected, setAddressSelected] = useState();
    const debouncedValue = useDebounce(text, 500);

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
        if (filterSearch) {
            (async function fetchApi() {
                const item = await getAllAddresses();
                if (!item.errorStatus) {
                    setAddresses(item.data);
                    setAddressSelected(item.data[0].name);
                }
            })();
        }
    }, []);

    useEffect(() => {
        if (apiEnabled) {
            if (!debouncedValue.trim()) {
                setSearchResult([]);
                return;
            }

            const fetchApi = async () => {
                const result = await searchService.any({
                    searchData: debouncedValue,
                    filter: addressSelected,
                });
                setSearchResult(result);
            };
            fetchApi();
        }
    }, [debouncedValue]);

    const handleSearch = (data) => {
        setText(data.target.value);
    };

    const handleClearText = () => {
        setText('');
    };

    return (
        <div
            style={{ width: width || filterSearch ? 625 : 500 }}
            className={'relative max-w-[100%] ' + className}
        >
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
                            className="bg-transparent outline-none grow h-[100%] overflow-hidden w-[65%] text-[13.5px]"
                            onChange={(e) => setAddressSelected(e.target.value)}
                        >
                            {addresses.length > 0 &&
                                addresses.map((dataFilter) => (
                                    <option
                                        value={dataFilter.name}
                                        className="overflow-hidden"
                                        key={dataFilter._id}
                                    >
                                        {dataFilter.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                )}
            </label>
            {apiEnabled && isFocused && (
                <div
                    className="bg-[#fff] absolute max-h-[400px] mt-[10px] rounded-[5px] flex flex-col text-[#333] overflow-y-auto  shadow-lg shadow-[#3333] font-medium z-50"
                    style={{
                        width: filterSearch ? 'calc(75% - 10px)' : '100%',
                    }}
                >
                    {text &&
                        !searchResult.errorStatus &&
                        searchResult.data?.companyNameData.length > 0 &&
                        searchResult.data.companyNameData.map((d, index) => (
                            <Link
                                to={`/filter-jobs/${d?._id}`}
                                className="px-[10px] hover:bg-[#99999950] cursor-pointer py-[5px]"
                                key={index}
                            >
                                {d?.name}
                            </Link>
                        ))}
                    {text &&
                        !searchResult.errorStatus &&
                        searchResult.data?.jobCategoriesData.length > 0 &&
                        searchResult.data.companyNameData.map((d, index) => (
                            <Link
                                to={`/list-search-jobs/${d?._id}/${addressSelected}`}
                                className="px-[10px] hover:bg-[#99999950] cursor-pointer py-[5px]"
                                key={index}
                            >
                                {d?.name}
                            </Link>
                        ))}
                    {text &&
                        !searchResult.errorStatus &&
                        searchResult.data?.jobLevelData.length > 0 &&
                        searchResult.data.jobLevelData.map((d, index) => (
                            <Link
                                to={`/list-search-jobs/${d?._id}/${addressSelected}`}
                                className="px-[10px] hover:bg-[#99999950] cursor-pointer py-[5px]"
                                key={index}
                            >
                                {d?.name}
                            </Link>
                        ))}
                    {text &&
                        !searchResult.errorStatus &&
                        searchResult.data?.jobNameData.length > 0 &&
                        searchResult.data.jobNameData.map((d, index) => (
                            <Link
                                to={`/list-search-jobs/${d?._id}/${addressSelected}`}
                                className="px-[10px] hover:bg-[#99999950] cursor-pointer py-[5px]"
                                key={index}
                            >
                                {d?.name}
                            </Link>
                        ))}
                    {text &&
                        !searchResult.errorStatus &&
                        searchResult.data?.jobSalaryData.length > 0 &&
                        searchResult.data.jobSalaryData.map((d, index) => (
                            <Link
                                to={`/list-search-jobs/${d?._id}/${addressSelected}`}
                                className="px-[10px] hover:bg-[#99999950] cursor-pointer py-[5px]"
                                key={index}
                            >
                                {d?.name}
                            </Link>
                        ))}
                    {text &&
                        !searchResult.errorStatus &&
                        searchResult.data?.jobRequiredData.length > 0 &&
                        searchResult.data.jobRequiredData.map((d, index) => (
                            <Link
                                to={`/list-search-jobs/${d?._id}/${addressSelected}`}
                                className="px-[10px] hover:bg-[#99999950] cursor-pointer py-[5px]"
                                key={index}
                            >
                                {d?.name}
                            </Link>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Search;
