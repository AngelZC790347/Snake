import {Direction} from './utilities'
export interface PropDimensions{
	heightMap	:number,
	widthMap	:number
}

export interface PropsGlobalState{
	points : number
}

export interface SharedStateSnakeSibling{
	x:number,
	y:number,
	currentMode:Direction,
}