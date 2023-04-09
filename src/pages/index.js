import Content from "../components/content";

export default function HomePage() {
	if (isFirstTimeVisitor) {
		return <p>Redirecting to landing page...</p>;
	}

	return (
		<Content>
			<h1 className="mb-6 text-4xl font-bold text-center">
				Welcom to Vital Vision
			</h1>
			<p className="mb-6 text-xl font-bold text-center">
				We are transforming Rehab with VR
			</p>
		</Content>
	);
}

export async function getServerSideProps(context) {
	const isFirstTimeVisitor = true;

	if (isFirstTimeVisitor) {
		return {
			redirect: {
				destination: "/landing",
				permanent: false,
			},
		};
	}

	return {
		props: { isFirstTimeVisitor: false },
	};
}
