import * as Yup from 'yup'

export const loginSchema = Yup.object({
    username: Yup.string().min(3).matches(/[a-zA-Z]/).required('Username kiriting'),
    password: Yup.string().matches(/[0-9a-zA-Z]/).min(6).required('Passwordni kiriting')
})