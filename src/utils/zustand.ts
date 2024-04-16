import { create } from "zustand";

interface LoadingState {
 isLoading: boolean;
 startLoading: () => void;
 stopLoading: () => void;
 transitionAnimation: (router: any, href: string) => void; // Adjust the type as needed
}

export const useLoadingStore = create<LoadingState>((set, get) => ({
 isLoading: false,
 startLoading: () => set({ isLoading: true }),
 stopLoading: () => set({ isLoading: false }),
 transitionAnimation: (router, href) => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ isLoading: false });
      router.push(href);
    }, 230); // Adjust the duration as needed
 },
}));