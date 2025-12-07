export const fiofeURL =
	"https://ipfs.decentralized-content.com/ipfs/bafybeihmprdfji5meevfujdy6syunmxxzqyb2bg57kws2sz6wk5xwgotoa";

export default function () {
	return (
		<div
			className="hero w-full aspect-square"
			style={{
				backgroundImage: `url(${fiofeURL})`,
			}}
		>
			<div className="hero-overlay bg-opacity-60" />
			<div className="top-6 mb-6 mx-6 text-3xl font-bold text-gray-200">
				Farcaster Is Open For Everyone
			</div>
		</div>
	);
}
