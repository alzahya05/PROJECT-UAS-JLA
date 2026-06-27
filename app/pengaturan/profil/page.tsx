"use client";

import { useState } from "react";
import { User, Mail, Camera } from "lucide-react";

export default function ProfilPage() {
  const [name, setName] = useState("Nama Pengguna");
  const [email, setEmail] = useState("user@example.com");

  return (
    <div className="space-y-6">
      <p className="text-slate-400">Kelola informasi profil Anda.</p>

      <div className="mx-auto max-w-lg space-y-6">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 text-blue-400 ring-2 ring-white/[0.08] ring-offset-2 ring-offset-[#050510]">
              <User className="h-12 w-12" />
            </div>
            <button
              className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full btn-primary-glow"
              aria-label="Ubah foto profil"
            >
              <Camera className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-300">
              Nama
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-glow h-12 w-full rounded-xl pl-10 pr-4 text-sm text-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-300">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-glow h-12 w-full rounded-xl pl-10 pr-4 text-sm text-white"
              />
            </div>
          </div>

          <button className="btn-primary-glow w-full rounded-xl py-3 font-medium">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}
