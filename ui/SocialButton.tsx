import {cn} from "@/lib/utils";

export default function SocialButton({ children, href, className, ...props }:
{ children: React.ReactNode, href: string, className?: string }) {
    return (<a href={href} target="_blank" rel="me">
        <button className={cn("w-10 h-10 rounded-full flex items-center justify-center text-foreground2 bg-background3 p-1", className)} {...props}>
            {children}
        </button>
    </a>)
}