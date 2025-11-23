import { create } from "zustand";
import { fetchUsers, fetchUser } from "../services/users";
import { UserStoreTypes, UserData } from "../types/users";

export const useUserStore = create<UserStoreTypes>((set, get) => ({
    users: [],
    user: {} as UserData,

    getUsers: async () => {
        try {
        const data = await fetchUsers();
        set({ users: data });
        } catch (error) {
        console.error("Failed to fetch users:", error);
        set({ users: [] });
        }
    },

    getUserById: async (id: string) => {
        try {
        const user = await fetchUser(id);
        if (user) {
            set({ user });
        } else {
            console.warn(`User with ID ${id} not found`);
            set({ user: {} as UserData });
        }
        } catch (error) {
        console.error("Failed to fetch user by ID:", error);
        set({ user: {} as UserData });
        }
    },
}));
