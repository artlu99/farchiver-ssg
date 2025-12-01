import "react-farcaster-embed/dist/styles.css";
import { FarcasterEmbed } from "react-farcaster-embed/dist/client";

const username = "antimofm.eth";
const hash = "0x724cbf";

export default function () {
	return (
		<div className="hero h-full bg-base-100">
			<div className="hero-content min-h-screen text-center text-content">
				<div className="prose text-left">
					<h3>The easiest way to save individual casts</h3>
					<h4>Permanence provided by Pinata 🤝 IPFS</h4>
					<div>
						<FarcasterEmbed username={username} hash={hash} />
					</div>
					<h3>WIP 👀</h3>
				</div>
			</div>
		</div>
	);
}
