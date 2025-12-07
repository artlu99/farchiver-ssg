import { redirection } from "../helpers";
import type { Env } from "../types";

const redirectUrl = "https://farchiver.xyz";
const init = { headers: { "content-type": "application/json;charset=UTF-8" } };
async function gatherResponse(response) {
	return JSON.stringify(await response.json());
}

export const onRequest: PagesFunction<Env> = async (context) => {
	const { request } = context;
	const newUrl = new URL(request.url);
	const params = newUrl.searchParams;

	if (
		request.method !== "GET" ||
		params.get("limit") !== "5" ||
		!params.get("username") ||
		!params.get("castHashPrefix")
	)
		return redirection(redirectUrl);

	const _key = `${params.get("username")}/${params.get("castHashPrefix")}`;

	const sourceUrl = `https://client.farcaster.xyz/v2/user-thread-casts?${params}`;

	const response = await fetch(sourceUrl, init);
	const results = await gatherResponse(response);
	return new Response(results, init);
};
