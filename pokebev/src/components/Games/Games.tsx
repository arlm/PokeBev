import VersionGroup from "./VersionGroup/VersionGroup";
import Version from "./Version/Version";
import Pokedexes from "./Pokedexes/Pokedexes";
import Generations from "./Generation/Generations";

export default function Games() {
    return (
        <>
            <Generations />
            <Pokedexes />
            <Version />
            <VersionGroup />
        </>
    )
}