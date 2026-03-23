import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex items-center justify-center gap-2">
            <Image src="/zodra.png" alt="Zodra" width={40} height={40} />
            <div className="flex flex-col gap-0">
                <span className="p-0 m-0 leading-5 text-lg font-bold">Zodra Adventure</span>
                <span className="p-0 m-0 leading-none text-xs text-muted-foreground">Outbound Bandung</span>
            </div>
        </div>
    );
};