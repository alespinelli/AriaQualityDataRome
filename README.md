# Air Quality Rome

## Info

json url: https://api.waqi.info/api/feed/@9352/obs.en.json

Zone: Arenula, Roma, Lazio, Italy

## How to access data

### -Basic data:

  -Zone name: rxs.obs[0].msg.city.name

  -Last update(date and time): value.rxs.obs[0].msg.time.s.en.time

### -Analyzed data:

  rxs.obs[0].msg.iaqi = [pm25, pm10, o3, no2, so2, co, t, p, h]
  
  (t = Temperature, p = Pressure, h = Humidity)
  
  Each element of iaqi array is a struct, made like this:
  
    {
      p: name,
      v: [current value, min value, max value],
      i: description,
      ...
    }
