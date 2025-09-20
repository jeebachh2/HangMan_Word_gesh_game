import getButtonStyling from "../getStyleTipe";


function Button({buttonType, text, styleType, onClickHandler }) {

   
    return (
       
            <button 
            type={buttonType}
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)} text-white rounded transition-all`}
            >  {text}
            </button>
            
      
    );

}




export default Button;