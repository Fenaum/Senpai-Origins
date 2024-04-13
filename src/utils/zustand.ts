import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
}

// Define a type for the store API
type LoadingStore = LoadingState & {
  startLoading: () => void;
  stopLoading: () => void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
}));
