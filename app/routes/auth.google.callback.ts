import type { LoaderFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/.server/services/auth'

export let loader = ({ request }: LoaderFunctionArgs) => {
  return authenticator.authenticate('google', request, {
    successRedirect: '/home',
    failureRedirect: '/login',
  })
}