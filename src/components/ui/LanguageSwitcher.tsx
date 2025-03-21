'use client';

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

// Language options
const languages = [
  { key: "ar", label: "العربية" },
  { key: "en", label: "English" },
];

// Main component
const LanguageSwitcher = () => {
  const [preferredLanguage, setPreferredLanguage] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();

  // Sync preferred language with current language
  useEffect(() => {
    setPreferredLanguage(language);
  }, [language]);

  // Handle language change
  const handleLanguageChange = (key: "ar" | "en") => {
    if (setLanguage) {
      setLanguage(key);
    } else {
      console.error("setLanguage function is not available.");
    }
  };

  // Get the active label based on the current language
  const getCurrentLanguageLabel = () => {
    const activeLanguage = languages.find(({ key }) => key === preferredLanguage);
    return activeLanguage?.label || "العربية";
  };

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group"
            aria-label="Toggle language"
          >
            <span className="mr-2">{getCurrentLanguageLabel()}</span>
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={cn(
              "w-[200px] z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            )}
          >
            {languages.map(({ key, label }) => (
              <DropdownMenuPrimitive.Item
                key={key}
                className={cn(
                  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                  key === preferredLanguage && "bg-accent text-accent-foreground"
                )}
                onClick={() => handleLanguageChange(key as "ar" | "en")}
              >
                {label}
              </DropdownMenuPrimitive.Item>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default LanguageSwitcher;