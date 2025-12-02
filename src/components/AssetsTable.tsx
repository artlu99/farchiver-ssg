import { shortenHash } from "helpers/formatUtils";
import { tarballsBaseUrl } from "helpers/getAssetsUrls";
import { Copy as CopyIcon } from "react-feather";
import type { AssetDescription } from "types";

const assetsTable = (sectionTitle: string, assets: AssetDescription[]) => (
	<div className="flex flex-col w-full">
		<div className="divider divider-start">{sectionTitle}</div>
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						<th>description</th>
						<th>date generated</th>
						<th>filename</th>
						<th>IPFS</th>
					</tr>
				</thead>
				<tbody>
					{assets.map((a) => {
						const timestampStr = new Date(a.timestamp).toLocaleDateString(
							"en-CA", // "YYYY-MM-DD" ISO 8601
						);
						return (
							<tr className="hover">
								<th>{a.description}</th>
								<td>{timestampStr}</td>
								<td>
									<a
										href={
											tarballsBaseUrl +
											a.tarball +
											".tar.gz" +
											(a.encrypted ? ".gpg" : "")
										}
										title={a.description}
									>
										{`${a.tarball}.tar.gz${a.encrypted ? ".gpg" : ""}`}
									</a>
								</td>
								<td>
									{a.cid ? (
										<>
											<a href={`ipfs://${a.cid}`}>{shortenHash(a.cid)}</a>{" "}
											<CopyIcon
												style={{
													display: "inline-block",
													width: "1em",
													height: "1em",
												}}
												class="text-xs cursor-pointer"
												onClick={async () => {
													await navigator.clipboard.writeText(a.cid ?? "");
												}}
											/>
										</>
									) : (
										""
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	</div>
);
export default assetsTable;
