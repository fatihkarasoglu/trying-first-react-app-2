import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import { Helmet } from "react-helmet";

import { useAuth } from "../../context/AuthContext"
import Input from "../../components/form/input";
import { LoginSchema } from "../../validations/LoginSchema";

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
                onSubmit={(values, actions) => {

                    setUser(values)
                    navigate(location?.state?.return_url || '/', {
                        replace: true
                    })

                    setTimeout(() => {
                        actions.setSubmitting(false)
                        actions.resetForm()
                    }, 3000)
            }}
                validationSchema={LoginSchema}
            >
                {({values, isSubmitting}) => (
                    <Form className="grid gap-y-3 p-4">
                        <Input label="Kullanıcı Adı" name="username" /> <br />
                        <Input label="E posta adresi" name="email" /> <br />
                        <Input label="şifre" name="password" type="password" /> <br />
                        <button type="reset">Formu Sıfırla</button>
                        <button disabled={isSubmitting} type="submit" className="bg-black h-10 text-sm text-white disabled:opacity-40">Giriş Yap</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}