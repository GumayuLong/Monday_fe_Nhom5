import React from 'react'

export default function Test() {
  return (
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
							<h2
								style={{
									fontSize: "24px",
									fontWeight: "500",
									marginBottom: "8px",
								}}
							>
								Hey there, what brings you here today?
							</h2>
							<div style={{ display: "flex" }}>
								{/* Work */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select1"
												value="work"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											Work
										</span>
									</label>
								</div>

								{/* Personal */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select1"
												value="personal"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											Personal
										</span>
									</label>
								</div>

								{/* School */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select1"
												value="school"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											School
										</span>
									</label>
								</div>

								{/* Nonprofits */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select1"
												value="nonprofits"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											Nonprofits
										</span>
									</label>
								</div>
							</div>
						</div>

						<div style={{ marginTop: "64px" }}>
							<h2
								style={{
									fontSize: "24px",
									fontWeight: "500",
									marginBottom: "24px",
								}}
							>
								What best describes your current role?
							</h2>
							<div
								style={{
									display: "flex",
									whiteSpace: "nowrap",
									flexWrap: "wrap",
								}}
							>
								{/* Bussiness owner */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select2"
												value="bussinessowner"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											Bussiness owner
										</span>
									</label>
								</div>

								{/* Team leader */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select2"
												value="teamleader"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											Team leader
										</span>
									</label>
								</div>

								{/* Team member */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select2"
												value="teammember"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											Team member
										</span>
									</label>
								</div>

								{/* Freelancer */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select2"
												value="freelancer"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											Freelancer
										</span>
									</label>
								</div>

								{/* Director */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select2"
												value="director"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											Director
										</span>
									</label>
								</div>

								{/* C-level */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select2"
												value="clevel"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											C-level
										</span>
									</label>
								</div>

								{/* VP */}
								<div
									style={{
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
									}}
								>
									<label
										htmlFor=""
										style={{
											padding: "8px 16px",
											fontWeight: "300",
											color: "#676879",
											border: "1px solid #c3c6d4",
											borderRadius: "32px",
											background: "#fff",
											marginLeft: "8px",
											marginTop: "16px",
											display: "flex",
										}}
									>
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												padding: "0 3px",
											}}
										>
											<input
												type="radio"
												name="select2"
												value="vp"
											/>
										</span>
										<span
											style={{
												color: "#676879",
												fontWeight: "300",
												fontSize: "14px",
											}}
										>
											VP
										</span>
									</label>
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
					>
						Continue
					</button>
				</div>
			</div>
			<div style={{ width: "40%" }}>
				<img src="" alt="" />
				<img
					src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png"
					alt="Background"
					style={{ height: "100vh" }}
				/>
			</div>
		</div>
  );
}
