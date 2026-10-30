import { parse } from 'smol-toml'
import source from '../data/ranking.toml?raw'

export interface Ganador {
	puesto: number
	establecimiento: string
	comuna: string
	ahorro?: number
	descripcion?: string
}

export interface Ranking {
	anio: number
	titulo?: string
	bajada?: string
	actualizado?: string
	ganadores: Ganador[]
}

const data = parse(source) as unknown as Ranking

if (!Array.isArray(data.ganadores) || data.ganadores.length === 0) {
	throw new Error('src/data/ranking.toml debe incluir al menos un bloque [[ganadores]]')
}

export const ranking: Ranking = {
	...data,
	ganadores: [...data.ganadores].sort((a, b) => a.puesto - b.puesto)
}

export const formatAhorro = (value?: number) => {
	if (typeof value !== 'number') return null
	return `${value.toLocaleString('es-CL', {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1
	})}%`
}
