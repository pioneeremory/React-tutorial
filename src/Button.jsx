
function Button(){
    const styles = {
        backgroundColor: "lightblue",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",}
    const handleClick = (e) => e.target.textContent = "OUCH";
    return(<button onClick={(e) => handleClick(e)} style={styles}>Click me</button>);

}

export default Button