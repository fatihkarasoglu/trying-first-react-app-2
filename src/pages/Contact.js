import { Formik, Form, Field } from "formik";
import { Helmet } from "react-helmet";

import Input from "../components/form/input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";

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
                    gender: 1,
                    skills: [],
                    avatar: ''
                }} 
                onSubmit={values => {
                    console.log(values);
                }}>
                {({ values }) => (
                    <Form className="p-6">
                        <Input label="Ad-soyad" name="name" /> <br />
                        <Textarea label="Hakkında" rows={4} name="about" /> <br />
                        <Checkbox label="Kuralları kabul ediyorum!" name="accept" />
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
                        <File label="Avatar" name="avatar" />
                        <button disabled={!values.accept} type="submit">Gönder</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}