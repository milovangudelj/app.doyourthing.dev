let production = process.env.NODE_ENV === "production";

export const BASE_URL = production
	? process.env.PROD_URL
	: process.env.DEVTEST_URL;

export const APP_BASE_URL = production
	? process.env.APP_PROD_URL
	: process.env.APP_DEVTEST_URL;
