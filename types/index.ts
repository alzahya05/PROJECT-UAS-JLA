export interface NavItem {
  label: string;
  href: string;
  icon: string;
  children?: NavItem[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizProgress {
  totalQuestions: number;
  answered: number;
  correct: number;
}

export interface SignLanguageEntry {
  id: string;
  word: string;
  category: "huruf" | "angka" | "kata";
  videoUrl: string;
  description?: string;
}

export interface HistoryEntry {
  id: string;
  tool: string;
  timestamp: Date;
  summary: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface NotificationSettings {
  pushEnabled: boolean;
  emailEnabled: boolean;
  soundAlerts: boolean;
  vibrationAlerts: boolean;
}
