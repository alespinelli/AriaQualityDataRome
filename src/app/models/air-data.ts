export interface AirData {
  name: string,
  description: string,
  currentValue: string,
  minValue: number,
  maxValue: number
}

export interface FinalAirData {
  airData: AirData[],
  time: string,
  city: string
}
