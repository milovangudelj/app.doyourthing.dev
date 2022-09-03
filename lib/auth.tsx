import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { Session, ApiError, User } from "@supabase/supabase-js";
import router from "next/router";

import { supabase } from "./supabase";

type Profile = {
	id: string;
	email: string;
	name: string;
	username: string;
	avatar_url?: string;
};

type AuthProviderValue = {
	user: Profile | null;
	session: Session | null;
	loading: boolean;
	signOut: () => Promise<void>;
	signInWithGoogle?: () => Promise<void>;
	signInWithGitHub?: () => Promise<void>;
	signInWithEmail: (
		credentials: { email: string; password: string },
		options?: {
			redirectTo?: string;
		}
	) => Promise<void | {
		error: ApiError;
	}>;
	signUpWithEmail: (
		userData: {
			name: string;
			username: string;
			email: string;
			password: string;
		},
		options?: {
			redirectTo?: string;
		}
	) => Promise<void | {
		error: ApiError;
	}>;
};

const AuthContext = createContext<AuthProviderValue | undefined>(undefined);

export function useAuth(): AuthProviderValue | undefined {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const auth = useProvideAuth();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth(): AuthProviderValue {
	const [user, setUser] = useState<Profile | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		// Get session and user
		setSession(supabase.auth.session());
		handleUser(supabase.auth.user());

		// Listen for changes on auth state (logged in, signed out, etc.)
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setSession(session);
				await fetch("/api/auth", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "same-origin",
					body: JSON.stringify({ event, session }),
				});

				await handleUser(session?.user ?? null);
			}
		);

		return () => {
			authListener?.unsubscribe();
		};
	}, []);

	const handleUser = async (rawUser: User | null) => {
		if (rawUser) {
			const user = await formatUser(rawUser);

			setUser(user);
		} else {
			setUser(null);
		}

		setLoading(false);
	};

	// Sign in with email
	const signInWithEmail = async (
		credentials: { email: string; password: string },
		options?: {
			redirectTo?: string;
		}
	): Promise<void | { error: ApiError }> => {
		const { error } = await supabase.auth.signIn(credentials, {
			shouldCreateUser: false,
			scopes: "",
		});
		if (error) return { error };

		router.push(options?.redirectTo ?? "/");
	};

	// Sign up with email
	const signUpWithEmail = async (
		userData: {
			name: string;
			username: string;
			email: string;
			password: string;
		},
		options?: {
			redirectTo?: string;
		}
	) => {
		const { error } = await supabase.auth.signUp(
			{
				email: userData.email,
				password: userData.password,
			},
			{
				data: {
					name: userData.name,
					username: userData.username,
				},
			}
		);
		if (error) return { error };

		router.push(options?.redirectTo ?? "/verify-email");
	};

	// Sign out
	const signOut = async (): Promise<void> => {
		const { error } = await supabase.auth.signOut();
		if (error) throw error;

		router.push("/");
	};

	return {
		user,
		session,
		loading,
		signUpWithEmail,
		signInWithEmail,
		signOut,
	};
}

const formatUser = async (rawUser: User): Promise<any> => {
	return {
		id: rawUser.id,
		email: rawUser.email,
		name: rawUser.user_metadata.name,
		username: rawUser.user_metadata.username,
		avatar_url: rawUser.user_metadata.avatar_url,
	};
};
