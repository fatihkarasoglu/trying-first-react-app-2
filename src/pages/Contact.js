import { Formik, Form, Field, useFormikContext } from "formik";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

import Input from "../components/form/input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import Radio from "../components/form/Radio";
import { SampleSchema } from "../validations/SampleSchema";
import { ContactSchema } from "../validations/ContactSchema";

const AutoSubmitCode = () => {

    const { values, submitForm } = useFormikContext();

    useEffect(() => {
        if(values.code.length === 6) {
            submitForm()
        }
    }, [values, submitForm])

    return null
}

export default function Contact() {

    return(
        <div>
            <Helmet>
                <title>İletişim</title>
            </Helmet>
            <h3>İletişim</h3>

            <Formik 
                initialValues={{
                    code: ''
                }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={SampleSchema}>
                
                {({ values }) => (
                    <Form className="hidden">
                        <Input label="Kodu girin" name="code" />
                        <button type="submit">Gönder</button>
                        <AutoSubmitCode />
                    </Form>
                )}
            </Formik>

            <Formik 
                initialValues={{
                    name: '',
                    accept: false,
                    about: '',
                    gender: '',
                    skills: [],
                    avatar: '',
                    level: ''
                }} 
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={ContactSchema}
                >
                {({ values }) => (
                    <Form className="p-6 m-4 shadow-lg grid gap-y-4 border rounded">
                        <Input label="Ad-soyad" name="name" />
                        <Textarea label="Hakkında" rows={4} name="about" />
                        <Checkbox label="Kuralları kabul ediyorum!" name="accept" />
                        <Select label="Cinsiyet" name="gender" options={[
                            {key: 1, value: 'Kadın'},
                            {key: 2, value: 'Erkek'}
                        ]} />
                        <Field component="select" name="skills" multiple={true}>
                            <option value="React">React</option>
                            <option value="Node.js">Node.js</option>
                            <option value="Vue.js">Vue.js</option>
                            <option value="Javascript">Javascript</option>
                        </Field>
                        <File label="Avatar" name="avatar" />
                        <Radio label="Seviyenizi seçin" name="level" options={[
                            {key: 'jr', value: 'JuniorDev'},
                            {key: 'mid', value: 'MidDev'},
                            {key: 'Sr', value: 'SeniorDev'}
                        ]} />
                        <button className="h-10 rounded bg-black block text-white px-5" type="submit">Gönder</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}