import axios from 'axios';

async function fetchValidatorDetail(validatorIndex: number) {
  const url = `https://beaconcha.in/api/v1/validator/${validatorIndex}`;

  try {
    const response = await axios.get(url);
    console.log('Validator Detail:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

fetchValidatorDetail(1918663);
