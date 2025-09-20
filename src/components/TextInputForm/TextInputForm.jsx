// presentation component




import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

   function TextInputForm({handleFormSubmit, handleTextInputChange, value, inputType, setInputType}) {
    
   

    return (
        <form className="flex" onSubmit={handleFormSubmit}>
            <div className="flex-1 mr-2">
                <TextInput 
                label="Enter a word or phrase"
                type={inputType}
                value={value}
                onChange={handleTextInputChange}
                />
            
            </div>

            <div>
                <Button 
                styleType="warning"
             
                text={inputType ==='password' ? 'show' : 'show'}
                onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')}
                />
            </div>

       
            
            <div>
                <Button 
                text="ok"
                type="submit"/>
                
            </div>
        </form>
    )

}

export default TextInputForm;