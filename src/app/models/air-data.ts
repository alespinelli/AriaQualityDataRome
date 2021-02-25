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

export const DEFAULT_AIR_DATA: FinalAirData = {
  airData: [
    {
      name: '',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    }
  ],
  time: '',
  city: ''
}
