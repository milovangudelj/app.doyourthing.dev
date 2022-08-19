type LogoType = "full" | "short" | "mark" | "type";
type LogoSize = "lg" | "md" | "sm";

interface LogoProps {
	type?: LogoType;
	size?: LogoSize;
}

type Sizes = {
	[Key in LogoType]: {
		[Key in LogoSize]: {
			w: number;
			h: number;
		};
	};
};

const sizes: Sizes = {
	full: {
		lg: {
			w: 323,
			h: 46,
		},
		md: {
			w: 194,
			h: 28,
		},
		sm: {
			w: 130,
			h: 19,
		},
	},
	short: {
		lg: {
			w: 125,
			h: 46,
		},
		md: {
			w: 75,
			h: 28,
		},
		sm: {
			w: 50,
			h: 19,
		},
	},
	mark: {
		lg: {
			w: 40,
			h: 40,
		},
		md: {
			w: 24,
			h: 24,
		},
		sm: {
			w: 16,
			h: 16,
		},
	},
	type: {
		lg: {
			w: 273,
			h: 45,
		},
		md: {
			w: 164,
			h: 27,
		},
		sm: {
			w: 110,
			h: 18,
		},
	},
};

export const Logo = ({ type = "full", size = "sm" }: LogoProps) => {
	let path;

	switch (type) {
		case "full":
			path = (
				<>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.79948 0.983887C7.24127 0.983887 7.59942 1.34203 7.59942 1.78383V4.7836C7.59942 5.22539 7.24127 5.58353 6.79948 5.58353C6.35769 5.58353 5.99954 5.22539 5.99954 4.7836V1.78383C5.99954 1.34203 6.35769 0.983887 6.79948 0.983887ZM0 7.78337C0 7.34157 0.358145 6.98343 0.799939 6.98343H3.79971C4.2415 6.98343 4.59965 7.34157 4.59965 7.78337C4.59965 8.22516 4.2415 8.5833 3.79971 8.5833H0.799939C0.358145 8.5833 0 8.22516 0 7.78337ZM8.99931 7.78337C8.99931 7.34157 9.35746 6.98343 9.79925 6.98343H12.799C13.2408 6.98343 13.599 7.34157 13.599 7.78337C13.599 8.22516 13.2408 8.5833 12.799 8.5833H9.79925C9.35746 8.5833 8.99931 8.22516 8.99931 7.78337ZM6.79948 9.9832C7.24127 9.9832 7.59942 10.3413 7.59942 10.7831V13.7829C7.59942 14.2247 7.24127 14.5828 6.79948 14.5828C6.35769 14.5828 5.99954 14.2247 5.99954 13.7829V10.7831C5.99954 10.3413 6.35769 9.9832 6.79948 9.9832Z"
						fill="#00AF4F"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M1.99152 2.97537C2.30391 2.66298 2.81041 2.66298 3.1228 2.97537L5.24396 5.09653C5.55635 5.40893 5.55635 5.91542 5.24396 6.22782C4.93156 6.54021 4.42507 6.54021 4.11267 6.22782L1.99152 4.10666C1.67912 3.79426 1.67912 3.28777 1.99152 2.97537ZM11.6074 2.97537C11.9198 3.28777 11.9198 3.79426 11.6074 4.10666L9.48628 6.22782C9.17388 6.54021 8.66739 6.54021 8.35499 6.22782C8.0426 5.91542 8.0426 5.40893 8.35499 5.09653L10.4761 2.97537C10.7885 2.66298 11.295 2.66298 11.6074 2.97537ZM5.24396 9.33885C5.55635 9.65124 5.55635 10.1577 5.24396 10.4701L3.1228 12.5913C2.81041 12.9037 2.30391 12.9037 1.99152 12.5913C1.67912 12.2789 1.67912 11.7724 1.99152 11.46L4.11267 9.33885C4.42507 9.02645 4.93156 9.02645 5.24396 9.33885ZM8.35499 9.33885C8.66739 9.02645 9.17388 9.02645 9.48627 9.33885L11.6074 11.46C11.9198 11.7724 11.9198 12.2789 11.6074 12.5913C11.295 12.9037 10.7885 12.9037 10.4761 12.5913L8.35499 10.4701C8.0426 10.1577 8.0426 9.65124 8.35499 9.33885Z"
						fill="#F97316"
					/>
					<path
						d="M24.6068 14.8088C23.7254 14.8088 22.9385 14.5948 22.246 14.1667C21.5535 13.7386 21.0058 13.1531 20.6028 12.4103C20.1999 11.6674 19.9985 10.8238 19.9985 9.87945C19.9985 8.93513 20.1999 8.09782 20.6028 7.36754C21.0058 6.62467 21.5535 6.04548 22.246 5.62998C22.9385 5.20188 23.7254 4.98784 24.6068 4.98784C25.3119 4.98784 25.9288 5.12004 26.4577 5.38445C26.9865 5.64887 27.4146 6.0203 27.742 6.49876V0.983887H30.1594V14.5822H28.0064L27.742 13.2413C27.4398 13.6568 27.0369 14.0219 26.5332 14.3367C26.0422 14.6515 25.4 14.8088 24.6068 14.8088ZM25.1167 12.6936C25.8974 12.6936 26.5332 12.4354 27.0243 11.9192C27.5279 11.3904 27.7797 10.7168 27.7797 9.89834C27.7797 9.07992 27.5279 8.4126 27.0243 7.89637C26.5332 7.36754 25.8974 7.10313 25.1167 7.10313C24.3487 7.10313 23.7128 7.36125 23.2092 7.87748C22.7055 8.39371 22.4537 9.06104 22.4537 9.87945C22.4537 10.6979 22.7055 11.3715 23.2092 11.9003C23.7128 12.4291 24.3487 12.6936 25.1167 12.6936Z"
						fill="white"
					/>
					<path
						d="M37.1162 14.8088C36.2096 14.8088 35.3912 14.6011 34.6609 14.1856C33.9432 13.7701 33.3703 13.1972 32.9423 12.4669C32.5267 11.724 32.319 10.8679 32.319 9.89834C32.319 8.92883 32.533 8.07894 32.9611 7.34866C33.3892 6.60578 33.9621 6.0266 34.6798 5.61109C35.4101 5.19559 36.2285 4.98784 37.1351 4.98784C38.029 4.98784 38.8349 5.19559 39.5525 5.61109C40.2828 6.0266 40.8557 6.60578 41.2712 7.34866C41.6993 8.07894 41.9134 8.92883 41.9134 9.89834C41.9134 10.8679 41.6993 11.724 41.2712 12.4669C40.8557 13.1972 40.2828 13.7701 39.5525 14.1856C38.8223 14.6011 38.0101 14.8088 37.1162 14.8088ZM37.1162 12.7124C37.7457 12.7124 38.2934 12.4795 38.7593 12.0136C39.2252 11.5352 39.4581 10.8301 39.4581 9.89834C39.4581 8.9666 39.2252 8.2678 38.7593 7.80193C38.2934 7.32347 37.752 7.08424 37.1351 7.08424C36.4929 7.08424 35.9389 7.32347 35.473 7.80193C35.0198 8.2678 34.7931 8.9666 34.7931 9.89834C34.7931 10.8301 35.0198 11.5352 35.473 12.0136C35.9389 12.4795 36.4866 12.7124 37.1162 12.7124Z"
						fill="white"
					/>
					<path
						d="M44.3974 18.7372L46.5693 13.959H46.0027L42.3576 5.21448H44.9829L47.6081 11.8059L50.3467 5.21448H52.9152L46.966 18.7372H44.3974Z"
						fill="white"
					/>
					<path
						d="M58.1791 14.8088C57.2726 14.8088 56.4541 14.6011 55.7239 14.1856C55.0062 13.7701 54.4333 13.1972 54.0052 12.4669C53.5897 11.724 53.3819 10.8679 53.3819 9.89834C53.3819 8.92883 53.596 8.07894 54.0241 7.34866C54.4522 6.60578 55.0251 6.0266 55.7428 5.61109C56.473 5.19559 57.2914 4.98784 58.198 4.98784C59.092 4.98784 59.8978 5.19559 60.6155 5.61109C61.3458 6.0266 61.9187 6.60578 62.3342 7.34866C62.7623 8.07894 62.9763 8.92883 62.9763 9.89834C62.9763 10.8679 62.7623 11.724 62.3342 12.4669C61.9187 13.1972 61.3458 13.7701 60.6155 14.1856C59.8852 14.6011 59.0731 14.8088 58.1791 14.8088ZM58.1791 12.7124C58.8087 12.7124 59.3564 12.4795 59.8222 12.0136C60.2881 11.5352 60.521 10.8301 60.521 9.89834C60.521 8.9666 60.2881 8.2678 59.8222 7.80193C59.3564 7.32347 58.815 7.08424 58.198 7.08424C57.5559 7.08424 57.0019 7.32347 56.536 7.80193C56.0827 8.2678 55.8561 8.9666 55.8561 9.89834C55.8561 10.8301 56.0827 11.5352 56.536 12.0136C57.0019 12.4795 57.5496 12.7124 58.1791 12.7124Z"
						fill="white"
					/>
					<path
						d="M68.6507 14.8088C67.4797 14.8088 66.5732 14.4437 65.931 13.7134C65.3015 12.9831 64.9867 11.9129 64.9867 10.5027V5.21448H67.3853V10.2761C67.3853 11.0819 67.549 11.6989 67.8763 12.127C68.2037 12.555 68.7199 12.7691 69.425 12.7691C70.0923 12.7691 70.6401 12.5299 71.0682 12.0514C71.5088 11.5729 71.7292 10.9056 71.7292 10.0494V5.21448H74.1467V14.5822H72.0125L71.8236 12.9957C71.534 13.5497 71.1122 13.9904 70.5582 14.3178C70.0168 14.6452 69.381 14.8088 68.6507 14.8088Z"
						fill="white"
					/>
					<path
						d="M76.6283 14.5822V5.21448H78.7814L79.008 6.97092C79.348 6.36655 79.8076 5.8881 80.3867 5.53555C80.9785 5.17041 81.671 4.98784 82.4643 4.98784V7.53752H81.7843C81.2555 7.53752 80.7834 7.61936 80.3679 7.78305C79.9524 7.94673 79.625 8.23003 79.3858 8.63294C79.1591 9.03585 79.0458 9.59616 79.0458 10.3138V14.5822H76.6283Z"
						fill="white"
					/>
					<path
						d="M88.2905 14.5822C87.3084 14.5822 86.5214 14.343 85.9297 13.8645C85.3379 13.3861 85.042 12.5362 85.042 11.3148V7.23534H83.4366V5.21448H85.042L85.3253 2.70256H87.4595V5.21448H89.9903V7.23534H87.4595V11.3337C87.4595 11.787 87.5539 12.1018 87.7428 12.278C87.9442 12.4417 88.2842 12.5236 88.7626 12.5236H89.9336V14.5822H88.2905Z"
						fill="white"
					/>
					<path
						d="M92.0659 14.5822V0.983887H94.4834V6.64985C94.7981 6.13362 95.2199 5.73071 95.7488 5.44111C96.2902 5.13893 96.9071 4.98784 97.5996 4.98784C98.758 4.98784 99.652 5.35298 100.282 6.08326C100.924 6.81354 101.245 7.88377 101.245 9.29397V14.5822H98.8461V9.52061C98.8461 8.71478 98.6825 8.09782 98.3551 7.66973C98.0403 7.24163 97.5367 7.02758 96.8442 7.02758C96.1643 7.02758 95.5977 7.26681 95.1444 7.74527C94.7037 8.22373 94.4834 8.89106 94.4834 9.74725V14.5822H92.0659Z"
						fill="white"
					/>
					<path
						d="M104.86 3.76021C104.419 3.76021 104.054 3.628 103.764 3.36359C103.487 3.09918 103.349 2.76552 103.349 2.36261C103.349 1.95969 103.487 1.63232 103.764 1.3805C104.054 1.11609 104.419 0.983887 104.86 0.983887C105.3 0.983887 105.659 1.11609 105.936 1.3805C106.226 1.63232 106.371 1.95969 106.371 2.36261C106.371 2.76552 106.226 3.09918 105.936 3.36359C105.659 3.628 105.3 3.76021 104.86 3.76021ZM103.651 14.5822V5.21448H106.068V14.5822H103.651Z"
						fill="white"
					/>
					<path
						d="M108.592 14.5822V5.21448H110.726L110.915 6.80095C111.204 6.24694 111.62 5.80625 112.161 5.47889C112.715 5.15152 113.364 4.98784 114.106 4.98784C115.265 4.98784 116.165 5.35298 116.807 6.08326C117.449 6.81354 117.77 7.88377 117.77 9.29397V14.5822H115.353V9.52061C115.353 8.71478 115.189 8.09782 114.862 7.66973C114.535 7.24163 114.025 7.02758 113.332 7.02758C112.652 7.02758 112.092 7.26681 111.651 7.74527C111.223 8.22373 111.009 8.89106 111.009 9.74725V14.5822H108.592Z"
						fill="white"
					/>
					<path
						d="M124.048 11.787C123.595 11.787 123.173 11.7366 122.783 11.6359L122.084 12.3347C122.298 12.448 122.588 12.5425 122.953 12.618C123.318 12.6936 123.91 12.7691 124.728 12.8446C125.975 12.958 126.881 13.2539 127.448 13.7323C128.015 14.2108 128.298 14.8718 128.298 15.7154C128.298 16.2694 128.147 16.7919 127.845 17.283C127.542 17.7866 127.076 18.1895 126.447 18.4917C125.817 18.8065 125.012 18.9639 124.029 18.9639C122.695 18.9639 121.618 18.7121 120.8 18.2084C119.981 17.7174 119.572 16.9745 119.572 15.9798C119.572 15.1362 119.981 14.4059 120.8 13.789C120.548 13.6757 120.328 13.556 120.139 13.4301C119.963 13.3042 119.805 13.172 119.667 13.0335V12.5991L121.31 10.8616C120.579 10.2194 120.214 9.3947 120.214 8.38742C120.214 7.75786 120.365 7.18497 120.668 6.66874C120.982 6.15251 121.423 5.7433 121.99 5.44111C122.556 5.13893 123.242 4.98784 124.048 4.98784C124.577 4.98784 125.068 5.06338 125.521 5.21448H129.072V6.68763L127.467 6.80095C127.719 7.2794 127.845 7.80823 127.845 8.38742C127.845 9.01697 127.693 9.58986 127.391 10.1061C127.089 10.6223 126.648 11.0315 126.069 11.3337C125.503 11.6359 124.829 11.787 124.048 11.787ZM124.048 9.93611C124.539 9.93611 124.942 9.80391 125.257 9.5395C125.584 9.27508 125.748 8.89735 125.748 8.4063C125.748 7.91525 125.584 7.53752 125.257 7.27311C124.942 7.0087 124.539 6.87649 124.048 6.87649C123.532 6.87649 123.117 7.0087 122.802 7.27311C122.487 7.53752 122.33 7.91525 122.33 8.4063C122.33 8.89735 122.487 9.27508 122.802 9.5395C123.117 9.80391 123.532 9.93611 124.048 9.93611ZM121.782 15.7343C121.782 16.2002 121.996 16.5464 122.424 16.773C122.865 17.0123 123.4 17.1319 124.029 17.1319C124.634 17.1319 125.125 17.006 125.503 16.7542C125.88 16.5149 126.069 16.1876 126.069 15.7721C126.069 15.4321 125.943 15.1488 125.691 14.9222C125.452 14.6955 124.967 14.557 124.237 14.5067C123.721 14.4689 123.243 14.4122 122.802 14.3367C122.437 14.5381 122.172 14.7585 122.009 14.9977C121.857 15.2369 121.782 15.4825 121.782 15.7343Z"
						fill="white"
					/>
				</>
			);
			break;

		case "short":
			path = (
				<>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M6.79797 0.963867C7.23966 0.963867 7.59773 1.32193 7.59773 1.76363V4.76273C7.59773 5.20443 7.23966 5.56249 6.79797 5.56249C6.35627 5.56249 5.99821 5.20443 5.99821 4.76273V1.76363C5.99821 1.32193 6.35627 0.963867 6.79797 0.963867ZM0 7.76183C0 7.32014 0.358065 6.96207 0.799761 6.96207H3.79886C4.24056 6.96207 4.59863 7.32014 4.59863 7.76183C4.59863 8.20353 4.24056 8.5616 3.79886 8.5616H0.799761C0.358065 8.5616 0 8.20353 0 7.76183ZM8.99731 7.76183C8.99731 7.32014 9.35537 6.96207 9.79707 6.96207H12.7962C13.2379 6.96207 13.5959 7.32014 13.5959 7.76183C13.5959 8.20353 13.2379 8.5616 12.7962 8.5616H9.79707C9.35537 8.5616 8.99731 8.20353 8.99731 7.76183ZM6.79797 9.96118C7.23966 9.96118 7.59773 10.3192 7.59773 10.7609V13.76C7.59773 14.2017 7.23966 14.5598 6.79797 14.5598C6.35627 14.5598 5.99821 14.2017 5.99821 13.76V10.7609C5.99821 10.3192 6.35627 9.96118 6.79797 9.96118Z"
						fill="#00AF4F"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M1.99107 2.95491C2.3034 2.64258 2.80978 2.64258 3.12211 2.95491L5.24279 5.0756C5.55512 5.38792 5.55512 5.8943 5.24279 6.20663C4.93047 6.51896 4.42409 6.51896 4.11176 6.20663L1.99107 4.08594C1.67875 3.77362 1.67875 3.26724 1.99107 2.95491ZM11.6049 2.95491C11.9172 3.26724 11.9172 3.77362 11.6049 4.08594L9.48417 6.20663C9.17184 6.51896 8.66546 6.51896 8.35313 6.20663C8.04081 5.8943 8.04081 5.38792 8.35313 5.0756L10.4738 2.95491C10.7861 2.64258 11.2925 2.64258 11.6049 2.95491ZM5.24279 9.31697C5.55512 9.6293 5.55512 10.1357 5.24279 10.448L3.12211 12.5687C2.80978 12.881 2.3034 12.881 1.99107 12.5687C1.67875 12.2564 1.67875 11.75 1.99107 11.4377L4.11176 9.31697C4.42409 9.00464 4.93047 9.00464 5.24279 9.31697ZM8.35313 9.31697C8.66546 9.00464 9.17184 9.00464 9.48417 9.31697L11.6049 11.4377C11.9172 11.75 11.9172 12.2564 11.6049 12.5687C11.2925 12.881 10.7861 12.881 10.4738 12.5687L8.35313 10.448C8.04081 10.1357 8.04081 9.6293 8.35313 9.31697Z"
						fill="#F97316"
					/>
					<path
						d="M24.6013 14.7863C23.7201 14.7863 22.9334 14.5723 22.241 14.1443C21.5487 13.7163 21.0011 13.131 20.5983 12.3883C20.1954 11.6456 19.994 10.8022 19.994 9.85804C19.994 8.91392 20.1954 8.07681 20.5983 7.34669C21.0011 6.60398 21.5487 6.02492 22.241 5.60951C22.9334 5.18151 23.7201 4.96751 24.6013 4.96751C25.3063 4.96751 25.9231 5.09969 26.4518 5.36404C26.9805 5.62839 27.4085 5.99975 27.7358 6.4781V0.964453H30.1527V14.5597H28.0001L27.7358 13.2191C27.4337 13.6345 27.0308 13.9996 26.5273 14.3143C26.0364 14.629 25.3944 14.7863 24.6013 14.7863ZM25.1111 12.6715C25.8916 12.6715 26.5273 12.4135 27.0183 11.8973C27.5218 11.3686 27.7736 10.6952 27.7736 9.87692C27.7736 9.05869 27.5218 8.39151 27.0183 7.8754C26.5273 7.34669 25.8916 7.08234 25.1111 7.08234C24.3433 7.08234 23.7076 7.34039 23.204 7.85651C22.7005 8.37263 22.4487 9.03981 22.4487 9.85804C22.4487 10.6763 22.7005 11.3497 23.204 11.8785C23.7076 12.4072 24.3433 12.6715 25.1111 12.6715Z"
						fill="white"
					/>
					<path
						d="M33.7846 18.7139L35.9561 13.9366H35.3896L31.7453 5.1941H34.37L36.9946 11.784L39.7326 5.1941H42.3006L36.3526 18.7139H33.7846Z"
						fill="white"
					/>
					<path
						d="M48.0536 14.5597C47.0718 14.5597 46.285 14.3206 45.6934 13.8422C45.1017 13.3639 44.8059 12.5142 44.8059 11.2931V7.21451H43.2009V5.1941H44.8059L45.0891 2.68275H47.2228V5.1941H49.7531V7.21451H47.2228V11.312C47.2228 11.7652 47.3172 12.0799 47.5061 12.2561C47.7075 12.4197 48.0474 12.5016 48.5257 12.5016H49.6964V14.5597H48.0536Z"
						fill="white"
					/>
				</>
			);
			break;

		case "mark":
			path = (
				<>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.00001 1.19995C8.44184 1.19995 8.80001 1.55812 8.80001 1.99995V4.99995C8.80001 5.44178 8.44184 5.79995 8.00001 5.79995C7.55818 5.79995 7.20001 5.44178 7.20001 4.99995V1.99995C7.20001 1.55812 7.55818 1.19995 8.00001 1.19995ZM1.20001 7.99995C1.20001 7.55812 1.55818 7.19995 2.00001 7.19995H5.00001C5.44184 7.19995 5.80001 7.55812 5.80001 7.99995C5.80001 8.44178 5.44184 8.79995 5.00001 8.79995H2.00001C1.55818 8.79995 1.20001 8.44178 1.20001 7.99995ZM10.2 7.99995C10.2 7.55812 10.5582 7.19995 11 7.19995H14C14.4418 7.19995 14.8 7.55812 14.8 7.99995C14.8 8.44178 14.4418 8.79995 14 8.79995H11C10.5582 8.79995 10.2 8.44178 10.2 7.99995ZM8.00001 10.2C8.44184 10.2 8.80001 10.5581 8.80001 11V14C8.80001 14.4418 8.44184 14.8 8.00001 14.8C7.55818 14.8 7.20001 14.4418 7.20001 14V11C7.20001 10.5581 7.55818 10.2 8.00001 10.2Z"
						fill="#00AF4F"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M3.19168 3.19159C3.5041 2.87917 4.01063 2.87917 4.32305 3.19159L6.44437 5.31291C6.75679 5.62533 6.75679 6.13186 6.44437 6.44428C6.13195 6.7567 5.62542 6.7567 5.313 6.44428L3.19168 4.32296C2.87926 4.01054 2.87926 3.50401 3.19168 3.19159ZM12.8083 3.19159C13.1208 3.50401 13.1208 4.01054 12.8083 4.32296L10.687 6.44428C10.3746 6.7567 9.86806 6.7567 9.55564 6.44428C9.24322 6.13186 9.24322 5.62533 9.55564 5.31291L11.677 3.19159C11.9894 2.87917 12.4959 2.87917 12.8083 3.19159ZM6.44437 9.55555C6.75679 9.86797 6.75679 10.3745 6.44437 10.6869L4.32305 12.8082C4.01063 13.1207 3.5041 13.1207 3.19168 12.8082C2.87926 12.4958 2.87926 11.9893 3.19168 11.6769L5.313 9.55555C5.62542 9.24313 6.13195 9.24313 6.44437 9.55555ZM9.55564 9.55555C9.86806 9.24313 10.3746 9.24313 10.687 9.55555L12.8083 11.6769C13.1208 11.9893 13.1208 12.4958 12.8083 12.8082C12.4959 13.1207 11.9894 13.1207 11.677 12.8082L9.55564 10.6869C9.24322 10.3745 9.24322 9.86797 9.55564 9.55555Z"
						fill="#F97316"
					/>
				</>
			);
			break;

		case "type":
			path = (
				<>
					<path
						d="M4.60935 13.828C3.72778 13.828 2.94066 13.6139 2.248 13.1857C1.55534 12.7576 1.00751 12.1719 0.604504 11.4289C0.201501 10.6859 0 9.84208 0 8.89755C0 7.95301 0.201501 7.11552 0.604504 6.38508C1.00751 5.64204 1.55534 5.06272 2.248 4.64713C2.94066 4.21894 3.72778 4.00484 4.60935 4.00484C5.3146 4.00484 5.9317 4.13708 6.46064 4.40155C6.98958 4.66602 7.41777 5.03753 7.74521 5.5161V0H10.1632V13.6013H8.00968L7.74521 12.2601C7.44296 12.6757 7.03996 13.0409 6.5362 13.3558C6.04504 13.6706 5.40276 13.828 4.60935 13.828ZM5.1194 11.7123C5.90021 11.7123 6.5362 11.4541 7.02736 10.9377C7.53112 10.4088 7.78299 9.73504 7.78299 8.91644C7.78299 8.09784 7.53112 7.43036 7.02736 6.91402C6.5362 6.38508 5.90021 6.1206 5.1194 6.1206C4.35117 6.1206 3.71518 6.37878 3.21143 6.89513C2.70768 7.41147 2.4558 8.07895 2.4558 8.89755C2.4558 9.71615 2.70768 10.3899 3.21143 10.9189C3.71518 11.4478 4.35117 11.7123 5.1194 11.7123Z"
						fill="white"
					/>
					<path
						d="M17.1215 13.828C16.2148 13.828 15.3962 13.6202 14.6657 13.2046C13.9479 12.789 13.3749 12.216 12.9467 11.4856C12.5311 10.7425 12.3233 9.88616 12.3233 8.91644C12.3233 7.94671 12.5374 7.09663 12.9656 6.36618C13.3937 5.62315 13.9668 5.04383 14.6846 4.62823C15.4151 4.21264 16.2337 4.00484 17.1404 4.00484C18.0346 4.00484 18.8406 4.21264 19.5584 4.62823C20.2889 5.04383 20.8619 5.62315 21.2775 6.36618C21.7057 7.09663 21.9198 7.94671 21.9198 8.91644C21.9198 9.88616 21.7057 10.7425 21.2775 11.4856C20.8619 12.216 20.2889 12.789 19.5584 13.2046C18.828 13.6202 18.0157 13.828 17.1215 13.828ZM17.1215 11.7312C17.7512 11.7312 18.299 11.4982 18.765 11.0322C19.231 10.5536 19.464 9.84838 19.464 8.91644C19.464 7.98449 19.231 7.28553 18.765 6.81956C18.299 6.341 17.7575 6.10171 17.1404 6.10171C16.4981 6.10171 15.944 6.341 15.478 6.81956C15.0246 7.28553 14.798 7.98449 14.798 8.91644C14.798 9.84838 15.0246 10.5536 15.478 11.0322C15.944 11.4982 16.4918 11.7312 17.1215 11.7312Z"
						fill="white"
					/>
					<path
						d="M24.4043 17.7573L26.5768 12.9779H26.0101L22.3641 4.23153H24.99L27.6158 10.8244L30.3549 4.23153H32.9241L26.9735 17.7573H24.4043Z"
						fill="white"
					/>
					<path
						d="M38.1891 13.828C37.2824 13.828 36.4638 13.6202 35.7333 13.2046C35.0155 12.789 34.4425 12.216 34.0143 11.4856C33.5987 10.7425 33.3909 9.88616 33.3909 8.91644C33.3909 7.94671 33.605 7.09663 34.0332 6.36618C34.4614 5.62315 35.0344 5.04383 35.7522 4.62823C36.4827 4.21264 37.3013 4.00484 38.208 4.00484C39.1022 4.00484 39.9082 4.21264 40.626 4.62823C41.3565 5.04383 41.9295 5.62315 42.3451 6.36618C42.7733 7.09663 42.9874 7.94671 42.9874 8.91644C42.9874 9.88616 42.7733 10.7425 42.3451 11.4856C41.9295 12.216 41.3565 12.789 40.626 13.2046C39.8956 13.6202 39.0833 13.828 38.1891 13.828ZM38.1891 11.7312C38.8188 11.7312 39.3667 11.4982 39.8326 11.0322C40.2986 10.5536 40.5316 9.84838 40.5316 8.91644C40.5316 7.98449 40.2986 7.28553 39.8326 6.81956C39.3667 6.341 38.8251 6.10171 38.208 6.10171C37.5657 6.10171 37.0116 6.341 36.5456 6.81956C36.0923 7.28553 35.8656 7.98449 35.8656 8.91644C35.8656 9.84838 36.0923 10.5536 36.5456 11.0322C37.0116 11.4982 37.5594 11.7312 38.1891 11.7312Z"
						fill="white"
					/>
					<path
						d="M48.663 13.828C47.4918 13.828 46.585 13.4628 45.9428 12.7324C45.3131 12.0019 44.9982 10.9315 44.9982 9.52094V4.23153H47.3973V9.29425C47.3973 10.1003 47.5611 10.7174 47.8885 11.1455C48.2159 11.5737 48.7323 11.7878 49.4376 11.7878C50.105 11.7878 50.6529 11.5485 51.081 11.07C51.5218 10.5914 51.7422 9.92394 51.7422 9.06756V4.23153H54.1602V13.6013H52.0256L51.8367 12.0145C51.547 12.5686 51.1251 13.0094 50.571 13.3369C50.0295 13.6643 49.3935 13.828 48.663 13.828Z"
						fill="white"
					/>
					<path
						d="M56.6425 13.6013V4.23153H58.796L59.0227 5.98837C59.3627 5.38387 59.8224 4.9053 60.4017 4.55267C60.9936 4.18745 61.6863 4.00484 62.4797 4.00484V6.55509H61.7996C61.2707 6.55509 60.7984 6.63695 60.3828 6.80067C59.9672 6.96439 59.6398 7.24775 59.4005 7.65076C59.1738 8.05376 59.0605 8.61418 59.0605 9.33203V13.6013H56.6425Z"
						fill="white"
					/>
					<path
						d="M68.3072 13.6013C67.3249 13.6013 66.5378 13.3621 65.9459 12.8835C65.3539 12.4049 65.058 11.5548 65.058 10.3332V6.25284H63.4523V4.23153H65.058L65.3414 1.71906H67.476V4.23153H70.0074V6.25284H67.476V10.3521C67.476 10.8055 67.5705 11.1204 67.7594 11.2967C67.9609 11.4604 68.3009 11.5423 68.7795 11.5423H69.9507V13.6013H68.3072Z"
						fill="white"
					/>
					<path
						d="M72.0834 13.6013V0H74.5015V5.66723C74.8163 5.15088 75.2382 4.74788 75.7671 4.45822C76.3087 4.15597 76.9258 4.00484 77.6184 4.00484C78.7771 4.00484 79.6712 4.37006 80.3009 5.1005C80.9432 5.83095 81.2643 6.90142 81.2643 8.31193V13.6013H78.8652V8.53862C78.8652 7.73262 78.7015 7.11552 78.3741 6.68733C78.0592 6.25914 77.5555 6.04504 76.8628 6.04504C76.1827 6.04504 75.616 6.28432 75.1626 6.76289C74.7218 7.24146 74.5015 7.90893 74.5015 8.76531V13.6013H72.0834Z"
						fill="white"
					/>
					<path
						d="M84.88 2.77694C84.4392 2.77694 84.074 2.64471 83.7843 2.38023C83.5073 2.11576 83.3687 1.78203 83.3687 1.37903C83.3687 0.976023 83.5073 0.648582 83.7843 0.396705C84.074 0.132235 84.4392 0 84.88 0C85.3208 0 85.6797 0.132235 85.9568 0.396705C86.2464 0.648582 86.3913 0.976023 86.3913 1.37903C86.3913 1.78203 86.2464 2.11576 85.9568 2.38023C85.6797 2.64471 85.3208 2.77694 84.88 2.77694ZM83.671 13.6013V4.23153H86.089V13.6013H83.671Z"
						fill="white"
					/>
					<path
						d="M88.6129 13.6013V4.23153H90.7475L90.9364 5.81835C91.2261 5.26422 91.6417 4.82344 92.1832 4.496C92.7373 4.16856 93.3859 4.00484 94.1289 4.00484C95.2876 4.00484 96.188 4.37006 96.8303 5.1005C97.4726 5.83095 97.7938 6.90142 97.7938 8.31193V13.6013H95.3757V8.53862C95.3757 7.73262 95.212 7.11552 94.8846 6.68733C94.5571 6.25914 94.0471 6.04504 93.3544 6.04504C92.6744 6.04504 92.1139 6.28432 91.6732 6.76289C91.245 7.24146 91.0309 7.90893 91.0309 8.76531V13.6013H88.6129Z"
						fill="white"
					/>
					<path
						d="M104.073 10.8055C103.62 10.8055 103.198 10.7551 102.807 10.6544L102.108 11.3533C102.322 11.4667 102.612 11.5611 102.977 11.6367C103.343 11.7123 103.934 11.7878 104.753 11.8634C106 11.9767 106.907 12.2727 107.473 12.7513C108.04 13.2298 108.323 13.891 108.323 14.7348C108.323 15.2889 108.172 15.8116 107.87 16.3027C107.568 16.8065 107.102 17.2095 106.472 17.5117C105.842 17.8266 105.036 17.984 104.054 17.984C102.719 17.984 101.642 17.7321 100.824 17.2284C100.005 16.7372 99.5959 15.9942 99.5959 14.9993C99.5959 14.1555 100.005 13.425 100.824 12.8079C100.572 12.6946 100.352 12.5749 100.163 12.449C99.9863 12.3231 99.8289 12.1908 99.6903 12.0523V11.6178L101.334 9.87987C100.603 9.23758 100.238 8.41268 100.238 7.40518C100.238 6.77548 100.389 6.20246 100.692 5.68612C101.006 5.16977 101.447 4.76047 102.014 4.45822C102.581 4.15597 103.267 4.00484 104.073 4.00484C104.602 4.00484 105.093 4.0804 105.546 4.23153H109.098V5.70501L107.492 5.81835C107.744 6.29692 107.87 6.82586 107.87 7.40518C107.87 8.03487 107.719 8.60789 107.417 9.12423C107.114 9.64058 106.674 10.0499 106.094 10.3521C105.528 10.6544 104.854 10.8055 104.073 10.8055ZM104.073 8.95422C104.564 8.95422 104.967 8.82198 105.282 8.55751C105.609 8.29304 105.773 7.91523 105.773 7.42407C105.773 6.93291 105.609 6.55509 105.282 6.29062C104.967 6.02615 104.564 5.89392 104.073 5.89392C103.557 5.89392 103.141 6.02615 102.826 6.29062C102.511 6.55509 102.354 6.93291 102.354 7.42407C102.354 7.91523 102.511 8.29304 102.826 8.55751C103.141 8.82198 103.557 8.95422 104.073 8.95422ZM101.806 14.7537C101.806 15.2197 102.02 15.566 102.448 15.7927C102.889 16.032 103.424 16.1516 104.054 16.1516C104.659 16.1516 105.15 16.0257 105.528 15.7738C105.905 15.5345 106.094 15.2071 106.094 14.7915C106.094 14.4514 105.968 14.1681 105.717 13.9414C105.477 13.7147 104.992 13.5762 104.262 13.5258C103.746 13.488 103.267 13.4313 102.826 13.3558C102.461 13.5573 102.197 13.7777 102.033 14.0169C101.882 14.2562 101.806 14.5018 101.806 14.7537Z"
						fill="white"
					/>
				</>
			);
			break;
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${sizes[type].sm.w} ${sizes[type].sm.h}`}
			width={sizes[type][size].w}
			height={sizes[type][size].h}
			fill="none"
		>
			{path}
		</svg>
	);
};
