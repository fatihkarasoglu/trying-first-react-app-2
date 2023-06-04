import Yup from "./validation"

export const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .required(),
    about: Yup.string()
    .required(),
    accept: Yup.boolean()
    .oneOf([true]),
    gender: Yup.object()
    .required(),
    avatar: Yup.mixed()
    .test({
        message: 'Bir avatar seçmelisiniz!',
        test: file => file?.name
        // olası bir selectbox düzenlemesinde
        // test: selected => selected.length > 2
    }),
    level: Yup.string()
    .required('Seviyenizi seçmelisiniz!')
})