const InputBar = ({ placeholder, islong }) => {
    return ( <div className={`input_bar ${islong ? "long" : ""}`}>
        <input type="text" placeholder={placeholder} />
    </div> );
}
 
export default InputBar;