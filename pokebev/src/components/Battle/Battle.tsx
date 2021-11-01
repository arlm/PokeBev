import { useState, useEffect } from "react";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import styles from './Battle.module.css';

interface pokemonDadosTypes {
    name: string,
    stats: { base_stat: number, effort: number, stat: { name: string, url: string } }[],
    abilities: object[]
}

function Battle() {
    const pokeInicial = { name: '', stats: [], abilities: [] };
    const [pokemon, setPokemon] = useState<pokemonDadosTypes>(pokeInicial);
    const [desafiante, setDesafiante] = useState<pokemonDadosTypes>(pokeInicial);
    const [species, setSpecies] = useState<string[]>([]);
    const [msg, setMsg] = useState<string>('');
    const [vitorias, setvitorias] = useState<number>(0);

    useEffect(() => {
        const inicializar = async () => {
            try {
                const pokeData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=11118`);
                const { results } = await pokeData.json();
                const ArrPokemons: string[] = results
                    .map(({ name }: { name: string }) => name);
                Array.isArray(ArrPokemons) ?
                    setSpecies(ArrPokemons) :
                    setSpecies([]);

            } catch (error) {
                alert("Erro ao inicializar");
            }
        }
        inicializar();

    }, [])

    const handleDigita = (e: any) => {
        if (e.code !== 'Enter') return;
        if (e.target.value === '') return;
        const pokeName: string = e.target.value.toLowerCase();
        BuscaPokemon(pokeName);
        buscaDesafiante();
        e.target.value = '';
    }

    const BuscaPokemon = async (pokeName: string) => {
        try {
            const url: string = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
            const pokeData = await fetch(url);
            const pokeObj = await pokeData.json();
            const pokemonDados: pokemonDadosTypes = {
                name: pokeObj.name,
                stats: pokeObj.stats,
                abilities: pokeObj.abilities
            }
            setPokemon(pokemonDados);
        } catch (error) {
            alert("Não foi possível achar o pokemon");
        }
    }

    const buscaDesafiante = async () => {
        try {
            const pokeRandon: number = Math.floor(Math.random() * 1116);
            const urlDesafiante: string = `https://pokeapi.co/api/v2/pokemon/${pokeRandon}`;
            const pokeDataDesafiante = await fetch(urlDesafiante);
            const pokeObjDesafiante = await pokeDataDesafiante.json();
            const pokemonDados: pokemonDadosTypes = {
                name: pokeObjDesafiante.name,
                stats: pokeObjDesafiante.stats,
                abilities: pokeObjDesafiante.abilities
            }
            setDesafiante(pokemonDados);
        } catch (error) {

        }
    }

    const handleClickHabilidade = async (nome: string) => {
        try {
            const pokeData = await fetch(`https://pokeapi.co/api/v2/ability/${nome}`);
            const pokeObj = await pokeData.json();
            setMsg(`${pokeObj.name} - ${pokeObj.effect_entries[1].effect}`);
        } catch (error) {
            alert("Habilidade não encontrado");
        }
    }

    const handleBattle = (status: number) => {
        if (!status) { alert('Não pode atacar com HP'); return; };
        const pokeatacante = pokemon.stats[status].base_stat;
        const pokedesafiante = desafiante.stats[status].base_stat;
        if (pokeatacante >= pokedesafiante) {
            const desafianteObj = { ...desafiante };
            desafianteObj.stats[0].base_stat -= pokeatacante - pokedesafiante;
            alert(`Você infrigiu ${pokeatacante - pokedesafiante} danos de HP no oponente`);
            if (desafianteObj.stats[0].base_stat <= 0) {
                setMsg('Você derrotou o oponente! Ganhou 20HP.');
                const pokemonObj = { ...pokemon };
                pokemonObj.stats[0].base_stat += 20;
                setPokemon(pokemonObj);
                buscaDesafiante();
                setvitorias(vitorias + 1);
                return;
            } else {
                setDesafiante(desafianteObj);
            }
        } else {
            const pokemonObj = { ...pokemon };
            pokemonObj.stats[0].base_stat -= pokedesafiante - pokeatacante;
            alert(`Desafiante infrigiu ${pokeatacante - pokedesafiante} danos de HP no seu pokemon`);
            if (pokemonObj.stats[0].base_stat <= 0) {
                setMsg('Seu pokemon morreu, é o fim de sua jornada');
                setDesafiante(pokeInicial);
                setPokemon(pokeInicial);
                return;
            }
            setPokemon(pokemonObj);

        }
    }

    return (
        <div className={styles.battle}>
            <div className={styles.pokeCard}>
                <input list="pokemons"
                    id='pokelista'
                    onKeyPress={(e: any) => handleDigita(e)}
                    placeholder='Digite e de enter'
                />
                <datalist id='pokemons'>
                    {species.length && species.map((s: any) => <option value={s} key={s} />)}
                </datalist>
                <h2>Pokemon:</h2>
                {pokemon.name.length > 0 &&
                    <div className={styles.pokeInfos}>
                        <div className={styles.direita}>
                            <p>Nome: <strong>{pokemon.name}</strong></p>
                            <div className={styles.status}>
                                Status:
                                {pokemon.stats.map((s: any, i: number) => <span onClick={() => handleBattle(i)} key={'stat' + s.stat.name} style={{ width: s.base_stat * 2 + 'px' }}>{s.stat.name} {s.base_stat}</span>)}
                            </div>
                            <p className={styles.habilidades}>
                                Habilidades:
                                {pokemon.abilities.map((a: any) => <Hab nome={a.ability.name} handleClick={handleClickHabilidade} key={a.ability.name} />)}

                            </p>
                        </div>
                        <div>
                            <img className={styles.pokeGif} src={`https://www.smogon.com//dex/media/sprites/xy/${pokemon.name}.gif`} alt="gif pokemon" />
                            <p className={styles.vitorias}>Vitórias: {vitorias}</p>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.pokeCard}>
                <h2>Desafiante:</h2>
                {desafiante.name.length > 0 &&
                    <div className={styles.pokeInfos}>
                        <div>
                            <p>Nome: <strong>{desafiante.name}</strong></p>
                            <div className={styles.status}>
                                Status:
                                {desafiante.stats.map((s: any) => <span key={'stat' + s.stat.name} style={{ width: s.base_stat * 2 + 'px' }}>{s.stat.name}</span>)}
                            </div>
                            <p className={styles.habilidades}>
                                Habilidades:
                                {desafiante.abilities.map((a: any) => <Hab nome={a.ability.name} handleClick={handleClickHabilidade} key={a.ability.name} />)}

                            </p>
                        </div>
                        <div>
                            <img className={styles.pokeGif} src={`https://www.smogon.com//dex/media/sprites/xy/${desafiante.name}.gif`} alt="gif pokemon" />
                        </div>
                    </div>
                }
            </div>

            <Modal show={msg} onHide={() => setMsg('')}>
                <ModalHeader closeButton>
                    <ModalTitle>Resultados!</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>
                        {msg}
                    </p>
                </ModalBody>
            </Modal>
        </div>

    );
}

export function Hab({ nome, handleClick }: { nome: string, handleClick: Function }) {
    return (
        <span className={styles.habilidadeBtn} onClick={() => handleClick(nome)}>{nome}</span>
    )
}

export default Battle;