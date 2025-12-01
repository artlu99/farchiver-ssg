import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import themeSelection from "atoms/themeSelection";
import Castimonials from "components/Castimonials";
import Navbar from "components/Navbar";
import Order from "components/Order";
import Pricing from "components/Pricing";
import Private from "components/Private";
import Public from "components/Public";
import TwoFooter from "components/TwoFooter";
import Viz from "components/Viz";
import { useAtom } from "jotai";
import { Suspense, useEffect } from "preact/compat";
import { useLocation } from "wouter";

export default function LayoutMainPage() {
	const [theme] = useAtom(themeSelection);
	useEffect(() => {
		const body = document.body;
		body.setAttribute("data-theme", theme);
	}, [theme]);

	const { user } = useDynamicContext();
	const [location] = useLocation();

	const isCastimonial = location === "/castimonials";
	const isPublic = location === "/public";

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<div className="flex flex-col h-screen">
				<Navbar />
				<div className="flex-1 bg-base-100">
					{isCastimonial ? (
						<Castimonials />
					) : isPublic ? (
						<Public />
					) : user ? (
						<Private />
					) : (
						<div className="prose mx-auto max-w-prose">
							<div className="mx-5">
								<Pricing />
								{user ? null : <Order />}
								<hr />
							</div>
							<Viz />
						</div>
					)}
				</div>
				<TwoFooter />
			</div>
		</Suspense>
	);
}
