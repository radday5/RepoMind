import { cn } from "@/lib/utils";
import Image from "next/image";

export function BotIcon({ className }: { className?: string }) {
    return (
        <Image
            src="/1080x1080.png"
            alt="RepoMind Bot"
            width={40}
            height={40}
            className={cn("w-full h-full object-cover rounded-full", className)}
        />
    );
}
