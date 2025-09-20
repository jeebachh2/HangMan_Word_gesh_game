function getButtonStyling(styleType) {
     const PrimaryButtonStyling = " bg-blue-500 border border-blue-700 hover:bg-blue-800 hover:border-blue-900";
    const SecomdaryButtonStyling = " bg-gray-500 border-gray-700 hover:bg-gray-700 hover:border-gray-900";
    const warningButtonStyling = "bg-yellow-500 border border-yellow-700 hover:bg-yellow-700 hover:border-yellow-900";
    const errorButtonStyling = "bg-red-500 border border-red-700 hover:bg-red-700 hover:border-red-900";


    if(styleType === "Primary") {
        return PrimaryButtonStyling;
    } else if(styleType === "Secondary") {
        return SecomdaryButtonStyling;
    } else if(styleType === "Warning") {
        return warningButtonStyling;
    } else if(styleType === "error") {
        return errorButtonStyling;

    } else {
        return PrimaryButtonStyling;
    }

}
export default getButtonStyling;