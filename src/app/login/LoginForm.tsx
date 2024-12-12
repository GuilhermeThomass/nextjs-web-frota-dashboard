"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";
import Image from "next/image";

import Logo from "../../../public/Logo pro.svg"

export function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined);

    return (
    <div className="flex flex-col gap-10 items-center">
        <Image src={Logo} alt="Logo do Pró-saúde" priority={false}/>
        <form action={loginAction} className="flex w-[450px] flex-col gap-4">
            <div className="flex">
                <input className="w-full rounded-lg bg-foreground py-[10px] px-[12px] font-semibold text-[16px]"id="email" name="email" placeholder="Usuário" />
            </div>
            {state?.errors?.email && (
                <p className="text-red-500">{state.errors.email}</p>
            )}

            <div className="flex">
                <input
                className="w-full rounded-lg bg-foreground py-[10px] px-[12px] font-semibold text-[16px]"
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                />
            </div>
            {state?.errors?.password && (
                <p className="text-red-500">{state.errors.password}</p>
            )}
            <SubmitButton />
        </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="
        mx-12
        transition ease-in-out
        bg-[#E72254]
        py-[10px]
        px-[12px]
        font-semibold
        text-[16px]

        hover:scale-105
        hover:border-white/25
        hover:cursor-pointer

        rounded-full
        active:scale-95"
        disabled={pending}
        type="submit">
      Login
    </button>
  );
}
