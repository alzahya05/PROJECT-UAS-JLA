"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useAppContext } from "@/lib/context";
import { ROLES } from "@/lib/constants";
import type { SignLanguage } from "@/types";
import WelcomeStep from "./WelcomeStep";
import LanguageStep from "./LanguageStep";
import RoleStep from "./RoleStep";

type Step = "welcome" | "language" | "role";

export default function OnboardingFlow() {
  const router = useRouter();
  const { selectedLanguage, setLanguage, setRole } = useAppContext();
  const [step, setStep] = useState<Step>("welcome");

  const handleLanguageSelect = (lang: SignLanguage) => {
    setLanguage(lang);
  };

  const handleRoleSelect = (role: "tuli" | "dengar") => {
    setRole(role);
    const roleConfig = ROLES.find((r) => r.value === role);
    if (roleConfig) {
      router.push(roleConfig.redirect);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <WelcomeStep key="welcome" onNext={() => setStep("language")} />
        )}
        {step === "language" && (
          <LanguageStep
            key="language"
            selected={selectedLanguage}
            onSelect={handleLanguageSelect}
            onNext={() => setStep("role")}
            onBack={() => setStep("welcome")}
          />
        )}
        {step === "role" && (
          <RoleStep
            key="role"
            selected={null}
            onSelect={handleRoleSelect}
            onBack={() => setStep("language")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
