import React from 'react'

export default function SignUpNew() {
  return (
		<div
			className="custom-font"
			style={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				className="responsive-width-form"
				style={{
					width: "60%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					height: "100%",
				}}
			>
				<div
					style={{
						margin: "auto",
						width: "60%",
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<div>
						<h1 style={{ fontSize: "32px", fontWeight: "500" }}>
							Welcome to monday.com
						</h1>
						<h2
							style={{
								marginBottom: "48px",
								fontWeight: "300",
								overflow: "hidden",
								minWidth: "300px",
							}}
						>
							Get started - it's free. No credit card needed.
						</h2>
					</div>
					<div>
						<button className="button-google">
							<img
								src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"
								alt=""
								style={{ width: "16px", margin: "0 8px 0 0" }}
							/>
							<span
								style={{ color: "#323338", fontWeight: "300" }}
							>
								Continue with Google
							</span>
						</button>
						<div
							style={{
								width: "80%",
								margin: "16px auto",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<div
								style={{
									borderTop: "1px solid #d0d4e4",
									height: "50%",
									width: "40%",
								}}
							></div>
							Or
							<div
								style={{
									borderTop: "1px solid #d0d4e4",
									height: "50%",
									width: "40%",
								}}
							></div>
						</div>
						<div>
							<div
								style={{
									marginBottom: "16px",
									textAlign: "center",
								}}
							>
								<input
									className="custom-placeholder"
									type="email"
									placeholder="name@company.com"
									style={{
										border: "1px solid #c3c6d4",
										borderRadius: "5px",
										width: "80%",
										height: "40px",
									}}
								/>
							</div>
							<button className="button-continue">
								Continue
							</button>
						</div>
						<div style={{ marginTop: "16px" }}>
							<div>
								<h5>By proceeding, you agree to the</h5>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<a href="#" className="link">
									<span>Terms of Service</span>
								</a>
								<h5 style={{ padding: "0 4px" }}>and</h5>
								<a href="#" className="link">
									<span>Privacy Policy</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginBottom: "64px",
					}}
				>
					<h5 style={{ padding: "0 4px" }}>
						Already have an account?
					</h5>
					<a href="#" className='link'>
						<span>Log in</span>
					</a>
				</div>
			</div>
			<div style={{ width: "40%", backgroundColor: "rgb(97, 97, 255)" }}>
				<img src="" alt="" />
				<img
					src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
					alt="Background"
					style={{ height: "100vh" }}
				/>
			</div>
		</div>
  );
}
