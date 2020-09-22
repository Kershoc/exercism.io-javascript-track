const EARTH_YEAR = 315576e2;

const SOLAR_SYSTEM = {
	mercury: 0.2408467,
	venus:   0.61519726,
	earth:   1,
	mars:    1.8808158,
	jupiter: 11.862615,
	saturn:  29.447498,
	uranus:  84.016846,
	neptune: 164.79132,
	pluto:   247.94,
}

const roundToHundredths = (number) => Math.round( ( number + Number.EPSILON ) * 100 ) / 100

export const age = (planet, seconds) => {
  return roundToHundredths(seconds / EARTH_YEAR / SOLAR_SYSTEM[planet]);
};
