import {
	DynamicConnectButton,
	useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import themeSelection from "atoms/themeSelection";
import { useAtom } from "jotai";
import { MoonIcon, SunIcon } from "lucide-react";

const Navbar = () => {
	const [theme, setTheme] = useAtom(themeSelection);
	const handleToggle = () => {
		setTheme(theme === "fantasy" ? "business" : "fantasy");
	};
	const { user, handleLogOut } = useDynamicContext();
	return (
		<div className="navbar bg-base-100 px-4 sm:px-8">
			<div className="flex-1">
				{user ? (
					<button
						class="btn btn-wide btn-square btn-accent"
						onClick={() => handleLogOut()}
					>
						Log out
					</button>
				) : (
					<button class="btn btn-wide btn-square btn-accent">
						<DynamicConnectButton>Connect wallet</DynamicConnectButton>
					</button>
				)}
			</div>
			<div className="flex-none">
				<label className="swap swap-rotate">
					<input
						type="checkbox"
						className="theme-controller"
						onChange={handleToggle}
					/>
					<SunIcon className="swap-on w-8 h-8" />
					<MoonIcon className="swap-off w-8 h-8" />
				</label>
			</div>
		</div>
	);
};

export default Navbar;
