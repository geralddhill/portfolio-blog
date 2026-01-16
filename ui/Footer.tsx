import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";
import SocialButton from "@/ui/SocialButton";
import {cn} from "@/lib/utils";

export default function Footer() {
    return (<footer className="w-full absolute bottom-0 bg-background2 flex flex-col items-center justify-center">
        <h4 className="text-3xl m-4">Gerald Hill</h4>
        <div className="flex items-center justify-center space-x-4 h-8 m-2">
            <SocialButton href="https://github.com/geralddhill">
                <IconBrandGithub className="h-full" />
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/in/geralddhill/">
                <IconBrandLinkedin className="h-full" />
            </SocialButton>
        </div>
        <p className="m-6">Copywright © 2026 Gerald Hill</p>
    </footer>)
}