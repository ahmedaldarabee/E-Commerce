import { Heading } from '@components/common';
import { Button , Col, Form, Row} from 'react-bootstrap';
import { signInSchema, type TFormInputs } from '@validations/signInSchema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from 'src/Form';

const Login = () => {
    const { 
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<TFormInputs>({
        mode:"onBlur",
        resolver: zodResolver(signInSchema)
    });

    const submitForm: SubmitHandler<TFormInputs> = (data) => {
        console.log(data);
    }
    
        return (
        <>
            <Heading title='login page'/>
            <Row>
                <Col md={{span: 6, offset:3}}>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Input 
                            label='Email'
                            name='email'
                            register={register} 
                            error={errors.email?.message} />
                        <Input 
                            type="password"
                            label='Password'
                            name='password'
                            register={register} 
                            error={errors.password?.message} />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>

        </>
    )
}

export default Login