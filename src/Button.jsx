function Button({ buttonName, setComponent, newComponent }) {
    const handleClick = () => {
        setComponent(newComponent); // Update the displayed component
    };

    return (
        <button onClick={handleClick}>
            {buttonName}
        </button>
    );
}

export default Button;