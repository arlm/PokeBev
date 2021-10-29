export type BerryData = {
  name: string,
  url: string,
}

export interface Data {
  natural_gift_power: number,
  smoothness: number,
  growth_time: number,
  name: string,
  item: BerryData
}

export interface GroupData {
  name: string,
  image: string
}