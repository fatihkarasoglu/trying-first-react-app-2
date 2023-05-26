import { Formik, Form, Field } from "formik"
import { Helmet } from "react-helmet"

export default function Contact() {

    return(
        <div>
            <Helmet>
                <title>İletişim</title>
            </Helmet>
            <h3>İletişim</h3> <br />

            <Formik 
                initialValues={{
                    name: 'Fatih',
                    accept: false,
                    about: '',
                    gender: '',
                    skills: [],
                    avatar: ''
                }} 
                onSubmit={values => {
                    console.log(values);
                }}>
                {({ values }) => (
                    <Form>
                        <Field name="name" /> <br />
                        <Field component="textarea" name="about" /> <br />
                        <label>
                            <Field type="checkbox" name="accept" />
                            Kuralları kabul ediyorum.
                        </label> <br />
                        <Field component="select" name="gender">
                            <option value={1}>Kadın</option>
                            <option value={2}>Erkek</option>
                        </Field>
                        <Field component="select" name="skills" multiple={true}>
                            <option value="React">React</option>
                            <option value="Node.js">Node.js</option>
                            <option value="Vue.js">Vue.js</option>
                            <option value="Javascript">Javascript</option>
                        </Field>
                        <Field type="file" name="avatar" />
                        <button disabled={!values.accept} type="submit">Gönder</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}