"use client";

import { useActionState } from "react";

import { Button, Error } from "../common";

import { handleSignUp } from "./actions";

export default function SignUp({ redirectTo }: { redirectTo?: string }) {
  const [state, signUpAction, pending] = useActionState(handleSignUp, null);

  return (
    <form className="flex flex-col w-full" action={signUpAction}>
      <Error error={state?.error} />

      <div className="flex justify-between gap-4">
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          className="w-full border rounded-[6px] text-[16px] placeholder-[#74747A] px-4 py-2 mb-4"
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          className="w-full border rounded-[6px] text-[16px] placeholder-[#74747A] px-4 py-2 mb-4"
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full border rounded-[6px] text-[16px] placeholder-[#74747A] px-4 py-2 mb-4"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full border rounded-[6px] text-[16px] placeholder-[#74747A] px-4 py-2 mb-4"
      />
      <input
        name="confirm"
        type="password"
        placeholder="Confirm password"
        className="w-full border rounded-[6px] text-[16px] placeholder-[#74747A] px-4 py-2 mb-8"
      />
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <Button>Sign up</Button>
    </form>
  );
}
