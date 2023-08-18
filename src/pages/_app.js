import Head from "next/head";
import "tailwindcss/tailwind.css";
import DashboardLayout from "../dashboard/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
	if (router.pathname.startsWith("/landing")) {
		return (
			<>
				<Head>
					<title>Semper Stroke</title>
				</Head>
				<Component {...pageProps} />
			</>
		);
	}

	return (
		<>
			<Head>
				<title>Semper Stroke</title>
			</Head>
			<DashboardLayout>
				<Component {...pageProps} />
			</DashboardLayout>
		</>
	);
}

export default MyApp;
