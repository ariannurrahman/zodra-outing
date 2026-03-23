import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex items-center justify-center gap-2">
            <Image src="/zodra-logo.png" alt="Logo" width={100} height={100} />
            <span className="text-2xl font-bold">Zodra Adventure</span>
        </div>
    );
};