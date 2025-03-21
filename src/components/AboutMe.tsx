'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/translations";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";


export const AboutMe = () => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
    const { language } = useLanguage();
    const t = useTranslations(language);
    
    return (    
    <Card className="mb-6">
        <CardHeader className="flex flex-row justify-between items-baseline">
            <CardTitle>{t.aboutMe}</CardTitle>
            <div className="flex items-center gap-2">
                {isDesktopOrLaptop && <ThemeSwitcher />}
                <LanguageSwitcher />
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                {t.longBio}
            </p>
        </CardContent>
    </Card>
    )
}