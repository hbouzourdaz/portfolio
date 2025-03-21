'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageType = 'ar' | 'en';

interface LanguageContextType {
    language: LanguageType;
    setLanguage: (newLanguage: LanguageType) => void;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageType>('ar');
    const [isRTL, setIsRTL] = useState<boolean>(true);

    useEffect(() => {
        const storedLanguage = window.localStorage.getItem('x-language') as LanguageType;
        if (storedLanguage && ['ar', 'en'].includes(storedLanguage)) {
            setLanguage(storedLanguage);
        }
    }, []);

    useEffect(() => {
        // Update document direction based on language
        if (language === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
            setIsRTL(true);
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
            setIsRTL(false);
        }
    }, [language]);

    const changeLanguage = (newLanguage: LanguageType) => {
        setLanguage(newLanguage);
        window.localStorage.setItem('x-language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};