import * as Yup from 'yup'

export const loginSchema = Yup.object({
    name: Yup.string().min(4).matches(/[a-zA-Z]/).required('Ismingizni kiriting')
})