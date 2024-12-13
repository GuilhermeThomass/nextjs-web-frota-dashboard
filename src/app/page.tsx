
export default function Home() {
    return (
        <div className="flex w-full h-full py-[28px] px-[32px]">
            <h1>Bem vindo!</h1>
            <p>{process.env.SESSION_SECRET}</p>
        </div>
    );
  }
