let production = process.env.NODE_ENV === "production";

export const BASE_URL = production
	? "https://doyourthing.dev"
	: "http://localhost:3000";

export const APP_BASE_URL = production
	? "https://app.doyourthing.dev"
	: "http://localhost:3001";
