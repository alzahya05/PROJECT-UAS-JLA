"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useState,
  type ReactNode,
} from "react";
import type { SignLanguage, Role } from "@/types";

interface AppState {
  selectedLanguage: SignLanguage;
  selectedRole: Role | null;
}

type AppAction =
  | { type: "SET_LANGUAGE"; payload: SignLanguage }
  | { type: "SET_ROLE"; payload: Role }
  | { type: "RESET_ONBOARDING" }
  | { type: "HYDRATE"; payload: AppState };

interface AppContextValue extends AppState {
  mounted: boolean;
  hasOnboarded: boolean;
  setLanguage: (lang: SignLanguage) => void;
  setRole: (role: Role) => void;
  resetOnboarding: () => void;
}

const STORAGE_KEY = "tenangaccess_state";

const defaultState: AppState = {
  selectedLanguage: "SIBINDO",
  selectedRole: null,
};

function loadState(): AppState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return {
      selectedLanguage: parsed.selectedLanguage ?? defaultState.selectedLanguage,
      selectedRole: parsed.selectedRole ?? defaultState.selectedRole,
    };
  } catch {
    return defaultState;
  }
}

function saveState(state: AppState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, selectedLanguage: action.payload };
    case "SET_ROLE":
      return { ...state, selectedRole: action.payload };
    case "RESET_ONBOARDING":
      return { ...state, selectedRole: null };
    case "HYDRATE":
      return action.payload;
    default:
      return state;
  }
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    dispatch({ type: "HYDRATE", payload: loadState() });
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) saveState(state);
  }, [state, mounted]);

  const setLanguage = useCallback(
    (lang: SignLanguage) => dispatch({ type: "SET_LANGUAGE", payload: lang }),
    []
  );

  const setRole = useCallback(
    (role: Role) => dispatch({ type: "SET_ROLE", payload: role }),
    []
  );

  const resetOnboarding = useCallback(
    () => dispatch({ type: "RESET_ONBOARDING" }),
    []
  );

  return (
    <AppContext.Provider
      value={{
        ...state,
        mounted,
        hasOnboarded: state.selectedRole !== null,
        setLanguage,
        setRole,
        resetOnboarding,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
