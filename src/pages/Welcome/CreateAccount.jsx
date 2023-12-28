/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Test from "./Test";

export default function CreateAccount() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleLayout = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<div>
			{isExpanded ? (
				<Test />
			) : (
				<div
					className="custom-font"
					style={{
						height: "100vh",
						width: "100vw",
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<div
						className="responsive-width-form"
						style={{
							width: "60%",
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "space-between",
							flexDirection: "column",
							height: "100%",
							padding: "64px 128px",
						}}
					>
						<div style={{ width: "100%" }}>
							<img
								src="https://cdn.monday.com/images/logos/logo-full-big.png"
								alt=""
								style={{ height: "24px", marginBottom: "64px" }}
							/>
							<div
								style={{
									margin: "0 auto",
									width: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<div>
									<h1
										style={{
											fontSize: "24px",
											fontWeight: "500",
											marginBottom: "24px",
										}}
									>
										Create your account
									</h1>
									<div>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												marginBottom: "20px",
											}}
										>
											<label
												htmlFor=""
												style={{
													fontSize: "14px",
													padding: "0 0 4px",
												}}
											>
												Full name
											</label>
											<input
												className="custom-placeholder"
												type="text"
												placeholder="Enter your full name"
												style={{
													border: "1px solid #c3c6d4",
													borderRadius: "5px",
													width: "75%",
													height: "48px",
												}}
											/>
										</div>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												marginBottom: "20px",
											}}
										>
											<label
												htmlFor=""
												style={{
													fontSize: "14px",
													padding: "0 0 4px",
												}}
											>
												Password
											</label>
											<input
												className="custom-placeholder"
												type="password"
												placeholder="Enter at least 8 characters"
												style={{
													border: "1px solid #c3c6d4",
													borderRadius: "5px",
													width: "75%",
													height: "48px",
												}}
											/>
										</div>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
											}}
										>
											<label
												htmlFor=""
												style={{
													fontSize: "14px",
													padding: "0 0 4px",
												}}
											>
												Account name
											</label>
											<input
												className="custom-placeholder"
												type="password"
												placeholder="For example, company's or department's name"
												style={{
													border: "1px solid #c3c6d4",
													borderRadius: "5px",
													width: "75%",
													height: "48px",
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							style={{
								alignItems: "center",
							}}
						>
							<button
								className="button-continue"
								style={{ width: "100%" }}
								onClick={toggleLayout}
							>
								Continue
							</button>
						</div>
					</div>
					<div style={{ width: "40%" }}>
						<img src="" alt="" />
						<img
							src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
							alt="Background"
							style={{ height: "100vh" }}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
