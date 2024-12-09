import Logo from "../../../public/Pró.svg"
import Link from "next/link";
import Image from "next/image";
import { PiUserCircleGearFill } from "react-icons/pi";

export default async function SideBar() {
    return (
        <div className="flex min-w-[15vw] bg-foreground h-full flex-col pt-[24px] px-[28px] justify-between">
            <div className="flex gap-20 flex-col text-[30px]">
                <Image src={Logo} alt="Logo do Pró-saúde" priority={false}/>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/login" className="m-10"><PiUserCircleGearFill size={64} color="#E72254"/></Link>
            </div>
        </div>
    );
  }
