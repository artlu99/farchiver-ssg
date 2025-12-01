import ExternalLink from "components/ExternalLink";
import { ArrowLeft as MoveLeftIcon } from "react-feather";
import { Link } from "wouter";

export default function () {
	return (
		<div>
			<div>
				<h1>/uses</h1>
				<h3>
					Farchiver is built on multiple Farcaster community 💜 member products
					+ FOSS projects
				</h3>
			</div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Buidler</th>
							<th>Description</th>
							<th>Project</th>
							<th>FOSS</th>
						</tr>
					</thead>
					<tbody>
						<tr className="hover">
							<th>🌌</th>
							<td>
								<ExternalLink href="https://flink.fyi/artlu">
									@artlu
								</ExternalLink>
							</td>
							<td>the easiest way to save your activity on Farcaster</td>
							<td>
								<ExternalLink href="https://warpcast.com/farchiver">
									@farchiver
								</ExternalLink>
							</td>
							<td></td>
						</tr>
						<tr className="hover">
							<th>💎</th>
							<td>
								<ExternalLink href="https://warpcast.com/kepano">
									@kepano
								</ExternalLink>
							</td>
							<td>
								cross-platform, self-sovereign knowledge tool built around
								Markdown
							</td>
							<td>
								<ExternalLink href="https://obsidian.md/">
									Obsidian
								</ExternalLink>
							</td>
							<td>🆓</td>
						</tr>
						<tr className="hover">
							<th>👋</th>
							<td>
								<ExternalLink href="https://warpcast.com/thatguyintech">
									@thatguyintech
								</ExternalLink>{" "}
								<ExternalLink href="https://warpcast.com/unhappiimochii">
									@unhappiimochii
								</ExternalLink>
							</td>
							<td>the easiest way to build web3 forms</td>
							<td>
								<ExternalLink href="https://www.deform.cc/">
									DeForm
								</ExternalLink>
							</td>
							<td>🆓</td>
						</tr>
						<tr className="hover">
							<th>🅿️</th>
							<td>
								<ExternalLink href="https://warpcast.com/colin">
									@colin
								</ExternalLink>
							</td>
							<td>web3-powered publications</td>
							<td>
								<ExternalLink href="https://paragraph.xyz/">
									Paragraph
								</ExternalLink>
							</td>
							<td>🆓</td>
						</tr>
						<tr className="hover">
							<th>📸</th>
							<td>
								<ExternalLink href="https://warpcast.com/kenny">
									@kenny
								</ExternalLink>
							</td>
							<td>on-chain bounties for security + fun</td>
							<td>
								<ExternalLink href="https://poidh.xyz/">POIDH</ExternalLink>
							</td>
							<td>🆓</td>
						</tr>
						<tr className="hover">
							<th>🪐</th>
							<td>
								<ExternalLink href="https://warpcast.com/rish">
									@rish
								</ExternalLink>{" "}
								<ExternalLink href="https://warpcast.com/manan">
									@manan
								</ExternalLink>
							</td>
							<td>the easiest way to build on Farcaster</td>
							<td>
								<ExternalLink href="https://neynar.com/">Neynar</ExternalLink>
							</td>
							<td></td>
						</tr>
						<tr className="hover">
							<th>👝</th>
							<td>
								<ExternalLink href="https://warpcast.com/dynamic">
									@dynamic
								</ExternalLink>
							</td>
							<td>Web3 login for everyone</td>
							<td>
								<ExternalLink href="https://dynamic.xyz">Dynamic</ExternalLink>
							</td>
							<td></td>
						</tr>
						<tr className="hover">
							<th>🟪</th>
							<td>
								<ExternalLink href="https://warpcast.com/dwr.eth">
									@dwr.eth
								</ExternalLink>{" "}
								<ExternalLink href="https://warpcast.com/v">@v</ExternalLink>
							</td>
							<td>
								permissionless Hub (Rust) + Replicator (PostgreSQL).
								MIT-licensed open-source{" "}
							</td>
							<td>
								<ExternalLink href="https://www.thehubble.xyz/">
									Farcaster Protocol
								</ExternalLink>
							</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>💪🏼</th>
							<td>
								<ExternalLink href="https://warpcast.com/vrypan.eth">
									@vrypan.eth
								</ExternalLink>
							</td>
							<td>powerful CLI tools for Farcaster Hub devs</td>
							<td>
								<ExternalLink href="https://github.com/vrypan/fario">
									fario
								</ExternalLink>
							</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>🌈</th>
							<td>
								<ExternalLink href="https://warpcast.com/mikedemarais.eth">
									@mikedemarais.eth
								</ExternalLink>
							</td>
							<td>
								<ExternalLink href="https://warpcast.com/rainbow">
									experience Crypto in Color
								</ExternalLink>
							</td>
							<td>
								<ExternalLink href="https://rainbow.me">
									Rainbow Wallet
								</ExternalLink>
							</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>Ξ</th>
							<td>
								<ExternalLink href="https://warpcast.com/vitalik.eth">
									@vitalik.eth
								</ExternalLink>
							</td>
							<td>
								<ExternalLink href="https://warpcast.com/~/channel/evm">
									Ethereum EVM
								</ExternalLink>
							</td>
							<td>
								<ExternalLink href="https://ethereum.org">
									Ethereum
								</ExternalLink>
							</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>🥢</th>
							<td></td>
							<td>minimalist routing - compares to Next/React Router</td>
							<td>
								<ExternalLink href="https://github.com/molefrog/wouter">
									Wouter
								</ExternalLink>
							</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>🤖</th>
							<td>
								<ExternalLink href="https://warpcast.com/farcasteradmin.eth">
									@farcasteradmin.eth
								</ExternalLink>
							</td>
							<td>FOSS frontend starter template. Clean, fast, tiny</td>
							<td>
								<ExternalLink href="https://templates.borodutch.com">
									frontend-starter
								</ExternalLink>
							</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>✨</th>
							<td>
								<ExternalLink href="https://warpcast.com/pugson">
									@pugson
								</ExternalLink>
							</td>
							<td>display an embedded cast from Farcaster in React</td>
							<td>
								<ExternalLink href="https://npm.im/react-farcaster-embed">
									react-farcaster-embed
								</ExternalLink>
							</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>🇹🇸</th>
							<td></td>
							<td>
								strongly-typed programming language (Microsoft) with modern
								tooling 💯
							</td>
							<td>TypeScript</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>⚡</th>
							<td></td>
							<td>
								native-ESM build tool with HMR (😸 no more Babel or Webpack)
							</td>
							<td>Vite</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>⚛️</th>
							<td></td>
							<td>stripped-down alternative to React (Meta/Facebook)</td>
							<td>Preact</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>👻</th>
							<td></td>
							<td>atomic approach to global React state management</td>
							<td>Jotai</td>
							<td>✔️</td>
						</tr>
						<tr className="hover">
							<th>🌩</th>
							<td></td>
							<td>
								serverless Edge deployment + best-in-class security,
								performance, reliability
							</td>
							<td>Cloudflare</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<Link href="/">
					<button type="button" className="btn btn-neutral">
						<MoveLeftIcon />
					</button>
				</Link>
			</div>
		</div>
	);
}
