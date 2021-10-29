import { useParams } from "react-router";
import Bulbasaur from "./Bulbasaur/Bulbasaur";
import Charmander from "./Charmander/Charmander";
import Jigglypuff from "./Jigglypuff/Jigglypuff";
import Squirtle from "./Squirtle/Squirtle";

function GroupDetails() {
	const { groupName } = useParams<any>();

	let ComponentGroup;
	switch (groupName) {
		case 'Bulbasaur':
			ComponentGroup = <Bulbasaur />;
			break;
		case 'Squirtle':
			ComponentGroup = <Squirtle />;
			break;
		case 'Charmander':
			ComponentGroup = <Charmander />;
			break;
		case 'Jigglypuff':
			ComponentGroup = <Jigglypuff />;
			break;
		default:
			throw new Error("Grupo não existe");

	}

	return (
		<>
			<h1>Grupo {groupName}</h1>
			{
				ComponentGroup
			}
		</>
	);
}

export default GroupDetails;