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
					<svg
						className="w-12 h-12 mx-auto text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24">
						<path d="M12 9c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9 4c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm18 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9-6c.343 0 .677.035 1 .101v-3.101c0-.552-.447-1-1-1s-1 .448-1 1v3.101c.323-.066.657-.101 1-.101zm9 4c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm0 10c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101zm-18-10c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm9 6c-.343 0-.677-.035-1-.101v7.101c0 .552.447 1 1 1s1-.448 1-1v-7.101c-.323.066-.657.101-1 .101zm-9 4c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101z" />
					</svg>
				),
			},
			{
				title: "Real-Time Progress Tracking",
				description:
					"Monitor your recovery journey with a comprehensive dashboard",
				icon: (
					<svg
						className="w-12 h-12 mx-auto text-gray-500"
						width="24"
						height="24"
						viewBox="0 0 24 24">
						<path d="M14.812 20.171c-.791.523-1.738.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.019-.306 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-9.083-1.171c-3.528 0-5.729-2.65-5.729-5.5 0-2.702 1.952-4.945 4.521-5.408.212-3.951 3.474-7.092 7.479-7.092 4.006 0 7.267 3.141 7.479 7.092 2.57.463 4.521 2.706 4.521 5.408 0 2.881-2.261 5.5-5.62 5.5.433-.909.675-1.927.675-3 0-3.863-3.137-7-7-7-3.864 0-7 3.137-7 7 0 1.073.242 2.091.674 3m6.326-6c1.655 0 3 1.345 3 3s-1.345 3-3 3c-1.656 0-3-1.345-3-3s1.344-3 3-3" />
					</svg>
				),
			},
			{
				title: "Play Anywhere, Anytime",
				description:
					"Access your therapy sessions from any VR device, anywhere",
				icon: (
					<svg
						className="w-12 h-12 mx-auto text-gray-500"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path d="M17.95 24h-11.9v-2.416c0-1.478-.22-1.698-.639-2.445-1.447-2.581-3.478-6.221-4.291-7.767-.218-.414-.083-.925.31-1.178h.001c.414-.266.959-.194 1.291.169.909.994 2.806 2.975 4.435 4.665 1.221 1.269 1.383 1.92 4.775 1.961 3.391.041 3.615-.614 4.911-1.961 1.629-1.69 3.526-3.671 4.435-4.665.332-.363.877-.435 1.291-.169h.001c.264.17.412.456.414.752.001.144-.032.291-.104.426-.813 1.546-2.844 5.186-4.291 7.767-.419.747-.639.873-.639 2.445v2.416zm-5.95-18c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-1.351-5.31l-.961-.69-3.657 5.094c-1.18-1.806-3.457-2.283-4.631-.648-.262.366-.385.786-.387 1.207-.004.741.363 1.483.987 1.932 1.164.835 2.968 1.013 4.046-.485l4.603-6.41zm8.671-.69l1.201 2.217 2.479.457-1.737 1.827.331 2.499-2.274-1.088-2.275 1.088.332-2.499-1.737-1.827 2.479-.457 1.201-2.217z" />
					</svg>
				),
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
					<p>© {new Date().getFullYear()} Semper Stroke. All rights reserved.</p>
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
