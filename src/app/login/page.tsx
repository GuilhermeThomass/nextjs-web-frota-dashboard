import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <LoginForm />
    </div>
  );
}
