import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { Form, json, Link, useLoaderData, useRouteError } from '@remix-run/react'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { authenticator } from '~/.server/services/auth'
import { commitSession, sessionStorage } from '~/.server/services/session'

export const CredentialSchema = z.object({
    email: z.string({required_error:"Email field is required."}).email(),
    password: z.string({required_error: "Password field is required."})
})

export async function action({request, context}:ActionFunctionArgs) {
    const response = await authenticator.authenticate("form", request, {
        failureRedirect:"/login",
        successRedirect: "/home",
        throwOnError: true,
        context
    })
    console.log(response)
    return response
}

export async function loader({request}:LoaderFunctionArgs){
    await authenticator.isAuthenticated(request, {
        successRedirect : "/"
    });

    const session = await sessionStorage.getSession(
        request.headers.get("Cookie")
    );

    const error = session.get("auth_error_key");
    return json({ error }, {
    headers:{
      'Set-Cookie': await commitSession(session) // You must commit the session whenever you read a flash
    }
  });
}

export default function route() {
    const error = useLoaderData<typeof loader>()
    const [loginErrorMessage, setLoginErrorMessage] = useState("")
    
    const formik = useFormik({
        initialValues:{
            email: "",
            password: ""
        },
        validationSchema: toFormikValidationSchema(CredentialSchema),
        onSubmit: ()=>{

        }
    })
  return (
    <div className="bg-white md:bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-none md:shadow-md md:rounded-lg p-10 w-96">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign In</h2>
            <div className="text-sm text-red-400 pl-0 p-4">
                    {error&&error.error&&error.error.message}
                </div>
            <Form method="POST" className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="text" id="email" name="email" className="input-text" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                    <div className='text-xs text-red-300'>{formik.errors.email&&formik.touched.email&&formik.errors.email}</div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="input-text" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                    <div className='text-xs text-red-300'>{formik.errors.password&&formik.touched.password&&formik.errors.password}</div>
                </div>
                <button type="submit"
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign In
                </button>

                <div className="mt-6 text-center">
                    <p className="text-gray-500">Or sign in with:</p>
                    <div className="flex justify-center mt-3 space-x-4">
                        <a href="#"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="#"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <i className="fab fa-google"></i> Google
                        </a>
                    </div>
                </div>
            </Form>
            <div className="mt-6 text-center">
                <p className="text-gray-500">Don't have an account? <Link to="/signup"
                                                                        className="text-indigo-500 hover:text-indigo-700 font-medium">Sign
                    Up</Link></p>
            </div>
        </div>
    </div>
  )
}

export function ErrorBoundary(){
    const error = useRouteError();
    if(error instanceof Error){
        return(<div>Shot puno.</div>)
    }
    
}
