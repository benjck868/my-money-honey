import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage, User} from "./session";
import { FormStrategy } from "remix-auth-form";
import prisma from "../utils/db/prisma";
import bcrypt from 'bcryptjs'
import { GoogleStrategy } from "remix-auth-google";

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
    if(!comparePassword) throw new AuthorizationError("Wrong password.") 
    const token:User = {
        name: "userId",
        token: user.id
    }
    return token;
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
);
//Google strategy
let googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: `/auth/google/callback`,
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    const user = await prisma.user.findUnique({where:{email:profile.emails[0].value}})
    let token:User
    if(!user){
      const newUser = await prisma.user.create({data:{
        email: profile.emails[0].value,
        name: profile.displayName,
        image:"default",
        strategy: "google"
      }})
     return token = {
      name : "userId",
      token : newUser.id
     }
    }
    return token = {
      name : "userId",
      token : user.id
    }
  }
)

authenticator.use(googleStrategy)
