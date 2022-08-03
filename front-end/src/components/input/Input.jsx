import { IoIosSearch, IoIosClose } from 'react-icons/io';

const Input = ({
    width,
    height,
    label,
    placeholder,
    type,
    name,
    fontSize,
    icon,
    className,
    ...propsCross
}) => {
    return (
        <label className="block" style={{ width: width }}>
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                {label}
            </span>
            <input
                type={type}
                name={name}
                style={{ height: height || 45, fontSize: fontSize }}
                className={
                    'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 font-medium focus:outline-none focus:border-purple-700 block w-full rounded-md sm:text-sm focus:ring-1 ' +
                    className
                }
                {...propsCross}
                placeholder={placeholder}
            />
        </label>
    );
};

export default Input;
