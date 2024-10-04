import { LoaderFunctionArgs } from '@remix-run/node';
import { Outlet } from '@remix-run/react'
import { authenticator } from '~/.server/services/auth';
export async function loader({request}:LoaderFunctionArgs){
  await authenticator.isAuthenticated(request, {
        successRedirect : "/home"
    });
    return null
}
export default function route() {
  return (
    <div className="md:bg-gray-100 bg-white min-h-screen flex items-center justify-center">
        <Outlet />
    </div>
  )
}
