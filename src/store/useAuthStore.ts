import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    login: (nim: string, password: string) => boolean;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            user: null,
            login: (nim, password) => {
                if (nim === "24090037" && password === "anjeli23") {
                    set({ isAuthenticated: true, user: nim });
                    return true;
                }
                return false;
            },
            logout: () => {
                set({ isAuthenticated: false, user: null });
                localStorage.removeItem("auth-storage");
            },
        }),
        { name: "auth-storage" }
    )
);