import React from "react"
import { SignIn ,SignUp ,SignedOut,SignedIn } from "@clerk/clerk-react"

export function AuthenticationPage(){
    return <div>
        <SignedOut>
            <SignIn routing="path" path="/sign-in"/>
            <SignUp routing="path" path="/sign-up"/>
        </SignedOut>
        <SignedIn>
            <div className="redirect-message">
                <p>You are already Signed in.</p>

            </div>

        </SignedIn>
    </div>
}