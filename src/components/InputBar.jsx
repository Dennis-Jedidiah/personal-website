const InputBar = ({ placeholder, islong, isEmail }) => {
    return ( <div className={`input_bar ${islong ? "long" : ""}`}>
        <input type={isEmail? 'email' : 'text'} name={placeholder} placeholder={placeholder} required/>
    </div> );
}
 
export default InputBar;