
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { Form} from 'react-bootstrap';

interface IInputProps<TFieldValue extends FieldValues> {
    label:string,
    name: Path<TFieldValue>,
    type?:"text" | "password",
    register: UseFormRegister<TFieldValue>,
    error?: string,
    emailOnBlur?:(e: React.FocusEvent<HTMLInputElement>) => void
    formText?: string, 
    success?:string,
    disable?:boolean
}

const Input = <TFieldValue extends FieldValues> ({disable,success,formText, error, label, name, type, register,emailOnBlur}:IInputProps<TFieldValue>) => {
    const emailHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if(emailOnBlur){
            emailOnBlur(e);
            register(name);
        }else{
            register(name);
        }
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                {...register(name)}
                onBlur={emailHandler}
                isInvalid={!!error}
                isValid={!!success}
                disabled={disable}
                />
            <Form.Control.Feedback type='invalid'> {error} </Form.Control.Feedback>
            <Form.Control.Feedback type='valid'> {success} </Form.Control.Feedback>
            {formText && <Form.Text muted>{formText}</Form.Text>}
        </Form.Group>
    )
}

export default Input