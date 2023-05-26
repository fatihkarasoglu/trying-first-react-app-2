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

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            setUser(values)
            navigate(location?.state?.return_url || '/', {
                replace: true
            })
        }
    });

    return(
        <div>
            <Helmet>
                <title>Login Sayfası</title>
            </Helmet>
            Login page <br />

            <hr />

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Kullanıcı Adı</label>
                <input type="text" id="username" value={values.username} onChange={handleChange} />   <br />

                <label htmlFor="email">E-posta</label>
                <input type="email" id="email" value={values.email} onChange={handleChange} />  <br />

                <label htmlFor="password">Parola</label>
                <input type="password" id="password" value={values.password} onChange={handleChange} />
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    )
}