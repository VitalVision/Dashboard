import Head from "next/head";
import "tailwindcss/tailwind.css";
import DashboardLayout from "../dashboard/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
	if (router.pathname.startsWith("/landing")) {
		return (
			<>
				<Head>
					<title>Vital Vision</title>
				</Head>
				<Component {...pageProps} />
			</>
		);
	}

	return (
		<>
			<Head>
				<title>Vital Vision</title>
			</Head>
			<DashboardLayout>
				<Component {...pageProps} />
			</DashboardLayout>
		</>
	);
}

export default MyApp;
