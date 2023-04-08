import React from "react";
import HeroSection from "../components/landing/HeroSection";
import GamesSection from "../components/landing/GamesSection";

export default function landing() {
	const FeatureCard = ({ title, description, icon }) => (
		<div className="bg-white shadow-md p-4 md:p-6 rounded text-center">
			<div className="mb-4">{icon}</div>
			<h2 className="font-semibold text-xl mb-2">{title}</h2>
			<p>{description}</p>
		</div>
	);

	const FeaturesSection = () => {
		const features = [
			{
				title: "Customizable Therapy Sessions",
				description: "Tailored to your unique needs and progress",
				icon: (
					<img
						src="/public/images/iconmonstr-control-panel-5.svg"
						alt="Customization"
					/>
				),
			},
			{
				title: "Real-Time Progress Tracking",
				description:
					"Monitor your recovery journey with a comprehensive dashboard",
				icon: <img src="/path/to/icon2.svg" alt="Data Analysis" />,
			},
			{
				title: "Play Anywhere, Anytime",
				description:
					"Access your therapy sessions from any VR device, anywhere",
				icon: <img src="/path/to/icon3.svg" alt="Professional Support" />,
			},
		];

		return (
			<section className="container mx-auto px-4 py-12">
				<h2 className="text-center text-3xl md:text-4xl font-semibold mb-8">
					Key Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</div>
			</section>
		);
	};

	const Footer = () => {
		return (
			<footer className="bg-gray-800 text-white py-6">
				<div className="container mx-auto px-4 text-center">
					<div className="mb-4">
						<a
							href="/privacy-policy"
							className="text-white hover:text-gray-300">
							Privacy Policy
						</a>{" "}
						|{" "}
						<a
							href="/terms-of-service"
							className="text-white hover:text-gray-300
          ">
							Terms of Service
						</a>
					</div>
					<div className="flex justify-center mb-4">
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-blue-500 mx-2">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							href="https://www.twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-blue-400 mx-2">
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-pink-500 mx-2">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
					<p>© {new Date().getFullYear()} Vital Vision. All rights reserved.</p>
				</div>
			</footer>
		);
	};

	return (
		<div className="grid grid-cols-1">
			<HeroSection />
			<FeaturesSection />
			<GamesSection />
			<Footer />
		</div>
	);
}
