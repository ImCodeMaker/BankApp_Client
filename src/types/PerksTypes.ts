import { StaticImageData } from "next/image"

type Direction = 'Left' | 'Right'

export type PerksTypes = {
    name: string
    image: StaticImageData
    description: string
    direction: Direction
}