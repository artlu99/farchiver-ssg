import userCount from "atoms/userCount";
import { formatNumber } from "helpers/formatUtils";
import { useAtom } from "jotai";

export default function () {
	const [fetchedUserCount] = useAtom(userCount);
	return <p># Satisfied Users: {formatNumber(fetchedUserCount)}</p>;
}
