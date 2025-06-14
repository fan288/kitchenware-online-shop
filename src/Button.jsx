function Button({ buttonName, setComponent, newComponent }) {
    const handleClick = () => {
        setComponent(newComponent); 
    };

    return (
        <button onClick={handleClick}>
            {buttonName}
        </button>
    );
}

export default Button;