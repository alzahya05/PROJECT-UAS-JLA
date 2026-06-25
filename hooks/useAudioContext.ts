"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseAudioContextReturn {
  isListening: boolean;
  frequencyData: Uint8Array;
  volume: number;
  startListening: () => void;
  stopListening: () => void;
  isSupported: boolean;
}

export function useAudioContext(): UseAudioContextReturn {
  const [isListening, setIsListening] = useState(false);
  const [frequencyData, setFrequencyData] = useState<Uint8Array>(new Uint8Array(0));
  const [volume, setVolume] = useState(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationRef = useRef<number | null>(null);

  const isSupported =
    typeof window !== "undefined" &&
    "AudioContext" in window &&
    "navigator" in window &&
    "mediaDevices" in navigator;

  const startListening = useCallback(async () => {
    if (!isSupported || isListening) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();

      analyser.fftSize = 256;
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      streamRef.current = stream;
      setIsListening(true);

      const updateData = () => {
        if (!analyserRef.current) return;

        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        setFrequencyData(dataArray);

        const sum = dataArray.reduce((a, b) => a + b, 0);
        setVolume(sum / dataArray.length);

        animationRef.current = requestAnimationFrame(updateData);
      };

      updateData();
    } catch {
      setIsListening(false);
    }
  }, [isSupported, isListening]);

  const stopListening = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }

    audioContextRef.current = null;
    analyserRef.current = null;
    streamRef.current = null;
    animationRef.current = null;
    setIsListening(false);
    setFrequencyData(new Uint8Array(0));
    setVolume(0);
  }, []);

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, [stopListening]);

  return { isListening, frequencyData, volume, startListening, stopListening, isSupported };
}
