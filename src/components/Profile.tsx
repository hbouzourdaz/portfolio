'use client'
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hook/useMediaQuery";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/translations";

const socials = [
    {
        name: "Github",
        link: "https://github.com/hbouzourdaz",
        icon: <FaGithub className="size-4" />
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/hbouzourdaz",
        icon: <FaLinkedin className="size-4" />
    },
    {
        name: "X (Twitter)",
        link: "https://x.com/hbouzourdaz21",
        icon: <FaXTwitter className="size-4" />
    }
    // يمكنك إضافة المزيد من وسائل التواصل الاجتماعي هنا
]

export const Profile = () => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
    const { language } = useLanguage();
    const t = useTranslations(language);

    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="w-full flex flex-row justify-between items-top ">
                        <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                            <Image
                                width={150}
                                height={150}
                                quality={100}
                                src="/avatar.svg"
                                alt="Profile Picture"
                                className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                            />
                            <div className="flex flex-col items-start justify-center">
<h1 className="font-bold md:mt-4 text-xl md:text-2xl">
    {language === 'ar' ? 'حكيم بوزورداز' : 'Hakim Bouzourdaz'}
</h1>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    {t.freelanceDeveloper}
                                </p>
                            </div>
                        </div>
                        {!isDesktopOrLaptop && (
                            <div className="flex items-center gap-2">
                                <LanguageSwitcher />
                                <ThemeSwitcher />
                            </div>
                        )}
                    </div>

                    <p className="mt-2 text-start text-sm text-muted-foreground">
                        {t.bio}
                    </p>
                    <Button className="mt-4 w-full" asChild>
                        {/* TODO: Add resume */}
                        {/* TODO: Add link to schedule a call with you using Calendly or Cal */}
                        <Link
                            href="mailto:hbouzourdaz@gmail.com"
                            target="_blank"
                            className="font-semibold uppercase"
                        >
                            {t.contactMe}
                        </Link>
                    </Button>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {socials.map((s, i) => {
                            const parts = s.link.split("/");
                            const username = parts[parts.length - 1];

                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {s.icon}
                                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        /{username}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}