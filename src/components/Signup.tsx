import ExternalLink from "components/ExternalLink";
import { Send as TelegramIcon } from "react-feather";

export default function () {
	const signupLink = `https://t.me/artlu99`;

	return (
		<div>
			Sign up via{" "}
			<ExternalLink className="link link-hover" href={signupLink}>
				<TelegramIcon className="h-5 w-5 inline" /> Telegram 
			</ExternalLink>
			<div className="text-sm text-gray-500">Apologies, DeForm is sunsetting end of January 2026.</div>
		</div>
	);
}
