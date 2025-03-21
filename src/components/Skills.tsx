'use client';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/translations";
const skills = ["Teaching", "Classroom Management", "Python", "HTML", "CSS", "Git", "Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel", "Document Editing", "Research Writing", "Physics", "Radiation Physics"]

export const Skills = () => {
    const { language } = useLanguage();
    const t = useTranslations(language);
    
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>{t.skills}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">{s}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}