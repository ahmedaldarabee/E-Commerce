
import axios from "axios";
import { useState } from "react";

type TStatus = "idle" | "checking" | "availability" | "notAvailability" | "failed";

const useCheckEmailAvailability = () => {
    const [emailAvailabilityStatus,setEmailAvailabilityStatus] = useState<TStatus>("idle");

    const [enteredEmail,setEnteredEmail] = useState<null|string>(null);

    const checkEmailAvailability = async (email: string) => {
        setEnteredEmail(email);
        setEmailAvailabilityStatus("checking");

        try {
            const response = await axios.get(`/users?email=${email}`);
            
            // check if the email exist on the database or not
            // if email doesn't exist, [ available ] so we can store it in the database
            // if email exist, [ not available ] so there are no needed to store it again!
            if(!response.data.length){
                setEmailAvailabilityStatus("availability");            
            }else{
                setEmailAvailabilityStatus("notAvailability");
            }
        } catch (error) {
            setEmailAvailabilityStatus("failed");
        }
    }

    // there are no email that stored to check it !
    const resetCheckEmailAvailability = () => {
        setEmailAvailabilityStatus("idle");
        setEnteredEmail(null);
    }

    return {
        emailAvailabilityStatus,
        enteredEmail,
        checkEmailAvailability,
        resetCheckEmailAvailability
    };
}

export default useCheckEmailAvailability;