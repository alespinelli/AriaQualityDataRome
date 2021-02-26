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
      name: '1',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '2',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '3',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '4',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '5',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '6',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '7',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '8',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '9',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    },
    {
      name: '10',
      description: '',
      currentValue: '',
      minValue: 0,
      maxValue: 0
    }
  ],
  time: '',
  city: ''
}
