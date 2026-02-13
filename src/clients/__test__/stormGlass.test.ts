import axios from 'axios';
import { StormGlass } from './stormGlass';
import stormGlassWeather3HoursFixture from '../../../tests/fixtures/stormglass_wheater_3.json'
import stormGlassNormalized3HoursFixture from '../../../tests/fixtures/stormGlass_normalized_response_3_hours.json'

jest.mock('axios');

describe('StormGlass client', () => {
    it('should return the normalized forecast from the StormGlass service', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        const lat = -33.792726;
        const lng = 151.289824;
        mockedAxios.get.mockResolvedValue({ data: stormGlassWeather3HoursFixture });
        const stormGlass = new StormGlass(mockedAxios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNormalized3HoursFixture);
    })
})