import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage, User} from "./session";
import { FormStrategy } from "remix-auth-form";
import prisma from "../utils/db/prisma";
import bcrypt from 'bcryptjs'

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User| AuthorizationError>(sessionStorage,{
    sessionErrorKey:"auth_error_key"
});
// Tell the Authenticator to use the form strategy
let AuthError: AuthorizationError
authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email") as string
    const password = form.get("password") as string
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(!user) throw new AuthorizationError("Wrong email or password.")
    if(typeof user.password !== "string") throw new AuthorizationError("Bad data")
    const comparePassword = await bcrypt.compare(password, user.password)
    if(!comparePassword) throw new AuthorizationError("Bad credentials.") 
    const token:User = {
        name: "userID",
        token: user.id
    }
    return token;
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
);