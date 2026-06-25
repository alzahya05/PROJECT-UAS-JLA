"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { NotificationSettings } from "@/types";
import { Bell, Mail, Vibrate, Volume2 } from "lucide-react";

const defaultSettings: NotificationSettings = {
  pushEnabled: true,
  emailEnabled: false,
  soundAlerts: true,
  vibrationAlerts: true,
};

interface SettingItemProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function SettingItem({ icon, label, description, checked, onChange }: SettingItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-card p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{label}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-muted"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default function NotifikasiPage() {
  const { value: settings, setValue: setSettings } =
    useLocalStorage<NotificationSettings>("notification-settings", defaultSettings);

  const updateSetting = (key: keyof NotificationSettings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Konfigurasi preferensi notifikasi Anda.
      </p>

      <div className="mx-auto max-w-lg space-y-3">
        <SettingItem
          icon={<Bell className="h-5 w-5" />}
          label="Notifikasi Push"
          description="Terima notifikasi langsung di browser"
          checked={settings.pushEnabled}
          onChange={(v) => updateSetting("pushEnabled", v)}
        />
        <SettingItem
          icon={<Mail className="h-5 w-5" />}
          label="Notifikasi Email"
          description="Terima ringkasan via email"
          checked={settings.emailEnabled}
          onChange={(v) => updateSetting("emailEnabled", v)}
        />
        <SettingItem
          icon={<Volume2 className="h-5 w-5" />}
          label="Peringatan Suara"
          description="Aktifkan suara untuk notifikasi penting"
          checked={settings.soundAlerts}
          onChange={(v) => updateSetting("soundAlerts", v)}
        />
        <SettingItem
          icon={<Vibrate className="h-5 w-5" />}
          label="Getaran"
          description="Aktifkan getaran untuk notifikasi"
          checked={settings.vibrationAlerts}
          onChange={(v) => updateSetting("vibrationAlerts", v)}
        />
      </div>
    </div>
  );
}
