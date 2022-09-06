import { ForgotForm, ResetForm, SigninForm, SignupForm } from "../../organisms";

type AuthViews = "signin" | "signup" | "reset" | "forgot";

interface AuthFormProps {
	view: AuthViews;
	token?: string;
}

export const AuthForm = ({ view, token }: AuthFormProps) => {
	switch (view) {
		case "signin":
			return <SigninForm />;
			break;
		case "signup":
			return <SignupForm />;
			break;
		case "reset":
			return <ResetForm token={token} />;
			break;
		case "forgot":
			return <ForgotForm />;
			break;
	}
};
