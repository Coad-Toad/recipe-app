import { create } from "zustand";
import { persist } from "zustand/middleware";

type Timer = {
  id: string;
  label: string;
  endTime: number;
  completed?: boolean;
  notified?: boolean;
};

type Store = {
  timers: Timer[];
  addTimer: (timer: Timer) => void;
  markComplete: (id: string) => void;
  markNotified: (id: string) => void;
  removeTimer: (id: string) => void;
};

export const useTimerStore = create(
  persist<Store>(
    (set) => ({
      timers: [],

      addTimer: (timer) =>
        set((state) => ({
          timers: [...state.timers, timer],
        })),

      markComplete: (id) =>
        set((state) => ({
          timers: state.timers.map((t) =>
            t.id === id ? { ...t, completed: true } : t,
          ),
        })),

      removeTimer: (id) =>
        set((state) => ({
          timers: state.timers.filter((t) => t.id !== id),
        })),
      markNotified: (id) =>
        set((state) => ({
          timers: state.timers.map((t) =>
            t.id === id ? { ...t, notified: true } : t,
          ),
        })),
    }),
    { name: "timers" },
  ),
);
