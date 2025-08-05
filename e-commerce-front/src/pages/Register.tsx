import { Heading } from '@components/common';
import { Button , Col, Form, Row} from 'react-bootstrap';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { signUpSchema, type TFormInputs } from '@validations/signUpSchema';
import { Input } from 'src/Form';
import useCheckEmailAvailability from '@hooks/useCheckEmailAvailability';

const Register = () => {
    const { 
        register,
        handleSubmit,
        formState:{errors},
        getFieldState,
        trigger
    } = useForm<TFormInputs>({
        mode:"onBlur",
        resolver: zodResolver(signUpSchema)
    });

    const submitForm: SubmitHandler<TFormInputs> = (data) => {
        console.log(data);
    }

    const {
        emailAvailabilityStatus, 
        enteredEmail,
        checkEmailAvailability,
        resetCheckEmailAvailability
    } = useCheckEmailAvailability();
    
    const emailOnBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
        await trigger("email");
        
        const { isDirty, invalid } = getFieldState("email");
        // value that be as email that entered by user
        const value = e.target.value;
        
        // this section when user add new email not same last email, it will do re-checking, WHY?
        // to avoid do re-checking multiple time to the same email. 
        if(isDirty && !invalid && enteredEmail !== value) {
            // checking ...
            checkEmailAvailability(value);
        }

        if(isDirty && invalid && enteredEmail){
            resetCheckEmailAvailability();
        }

    }
    return (
        <>
            <Heading title='registration page'/>
            <Row>
                <Col md={{span: 6, offset:3}}>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Input 
                            label='First Name'
                            name='firstName'
                            register={register} 
                            error={errors.firstName?.message} />
                        <Input 
                            label='Last Name'
                            name='lastName'
                            register={register} 
                            error={errors.lastName?.message} />
                        <Input 
                            label='Email'
                            name='email'
                            emailOnBlur={emailOnBlur}
                            register={register} 
                            formText={emailAvailabilityStatus === "checking" ? "check please wait...":""}
                            success={emailAvailabilityStatus === "availability" ? "this email available for use":""}
                            error={
                                    errors.email?.message
                                    ?  errors.email?.message
                                    :  emailAvailabilityStatus === 
                                    "notAvailability"
                                    ? "this email is already in use"
                                    
                                    :emailAvailabilityStatus === 
                                    "failed"
                                    ? "Sorry, there are an error in the server":""
                            }
                            disable={emailAvailabilityStatus==="checking" ? true : false}
                            />
                        <Input 
                            label='Password'
                            name='password'
                            type="password"
                            register={register} 
                            error={errors.password?.message}/>

                        <Input 
                            type="password"
                            label='Confirm Password'
                            name='confirmPassword'
                            register={register} 
                            error={errors.confirmPassword?.message} />

                        <Button
                            disabled={emailAvailabilityStatus==="checking" ? true : false}
                            variant="primary"
                            type="submit">
                            Submit </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Register