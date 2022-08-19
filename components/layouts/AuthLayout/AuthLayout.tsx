export const AuthLayout = ({ children }: { children: any }) => {
	return (
		<div className="bg-zync-900 text-white min-h-screen flex gap-0">
			<main className="flex relative items-center justify-center flex-1 order-2 min-h-full">
				{children}
			</main>
			<aside className="flex items-center w-2/5 min-h-full order-1 relative justify-center overflow-hidden bg-unsplash-random bg-center bg-cover">
				<a
					href="https://unsplash.com"
					className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-white rounded"
					title="Courtesy of Usplash"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
							fill="#000000"
							fillRule="nonzero"
						/>
					</svg>
				</a>
			</aside>
		</div>
	);
};
