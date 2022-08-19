import { ResetForm, SigninForm, SignupForm } from "../../organisms";

type AuthViews = "signin" | "signup" | "reset";

interface AuthFormProps {
	view: AuthViews;
}

export const AuthForm = ({ view }: AuthFormProps) => {
	switch (view) {
		case "signin":
			return <SigninForm />;
			break;
		case "signup":
			return <SignupForm />;
			break;
		case "reset":
			return <ResetForm />;
			break;
	}
};
