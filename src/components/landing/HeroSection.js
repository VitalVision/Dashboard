import React from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="relative">
			<div className={styles.body}>
				<div className="relative h-screen">
					<div className="container mx-auto px-4 h-full flex items-center justify-center flex-col relative">
						<img
							src="/images/logo_words_light.png"
							alt="Semper Stroke"
							className="mx-auto top-0 left-0 right-0 bottom-0 absolute h-1/4 md:h-1/3"
						/>
						<div className="max-w-xl md:max-w-3xl text-center text-white-800 ">
							<h1 className="text-3xl md:text-6xl font-bold mb-4 ">
								<span className={styles.outline}>
									Revolutionize Your Stroke Rehabilitation with VR Gaming
								</span>
							</h1>
							<p className="text-lg md:text-2xl mb-6 [text-outline] text-white">
								<div className="sd">
									Experience immersive, engaging, and effective therapy from the
									comfort of your home
								</div>
							</p>
							<button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-white text-lg md:text-2xl">
								<Link href="/patient/1/dashboard">Try It Now</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
