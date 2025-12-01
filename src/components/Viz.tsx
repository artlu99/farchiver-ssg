import ExternalLink from "components/ExternalLink";
import viz from "img/viz.gif";
import { ExternalLink as ExternalLinkIcon } from "react-feather";

export default function () {
	return (
		<>
			<img src={viz} alt="Animated Data Vizualization" />
			<div className="mx-5 text-left">
				<h3>PAID SERVICE</h3>
				<ul>
					<li>
						delightful{" "}
						<ExternalLink
							className="link link-hover"
							href="https://obsidian.md/"
						>
							Obsidian{" "}
							<ExternalLinkIcon className="h-4 w-4 inline align-text-top" />
						</ExternalLink>{" "}
						visualization
					</li>
					<li>each cast/reply/recast = one Markdown file</li>
					<li>likes+follows = links</li>
					<li>replies/threads are linked</li>
				</ul>
			</div>
		</>
	);
}
