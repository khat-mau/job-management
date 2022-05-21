const Wrapper = ({ className, content, children }) => {
    console.log(className);
    return (
        <div className={className}>
            <div
                className={'max-w-[1350px] box-content ' + content}
                style={{
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Wrapper;
