import { useEffect } from "react";
import { useGlobalContext } from "../states/context/globalContext";

const Alert = () => {
    const { alertType, alertMessage } = useGlobalContext();
    useEffect(() => {
      
    }, [alertType, alertMessage]);
    return (
        alertType !== "" &&
        alertMessage !== "" && (
            <div
                className={`scale-in-center fixed border-l-4 rounded-md alert p-2 px-4 ${
                    alertType === "error"
                        ? "border-red-600"
                        : "border-green-600"
                } left-8 bottom-8 w-max bg-black z-50 text-white`}
            >
                {alertMessage}
            </div>
        )
    );
};

export default Alert;
