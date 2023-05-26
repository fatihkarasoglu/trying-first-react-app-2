import { useNavigate, useLocation } from "react-router-dom";
import { useFormik, Formik, Form, Field } from "formik";
import { Helmet } from "react-helmet";

import { useAuth } from "../../context/AuthContext"

export default function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    const { setUser } = useAuth();

    const loginHandle = () => {
        setUser({
            id: 1,
            userName: 'Fatih'
        })
        navigate(location?.state?.return_url || '/', {
            replace: true,
            state: 'fatih'
        })
    }

    return(
        <div>
            <Helmet>
                <title>Login Sayfası</title>
            </Helmet>
            Login page <br />

            <Formik 
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }} 
                onSubmit={values => {
                    setUser(values)
                    navigate(location?.state?.return_url || '/', {
                    replace: true
                })
            }}>
                {props => (
                    <Form>
                        <Field name="username" /> <br />
                        <Field name="email" /> <br />
                        <Field name="password" /> <br />
                        <button type="submit">Giriş Yap</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}