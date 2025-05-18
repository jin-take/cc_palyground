import axios from 'axios';

async function fetchLatestValidatorIndexes() {
  const url = 'https://beaconcha.in/api/v1/validator/eth1/0x5b3E2bb0FC7cAd985c1461FeC254a9cc162Ff168';

  try {
    const response = await axios.get(url);

    const allValidators = response.data.data;

    if (!Array.isArray(allValidators)) {
      console.error('Unexpected response format');
      return;
    }

    // 最新の3件を取得（後ろから3つ）
    const latestThree = allValidators.slice(-3).map((entry: any) => ({
      validatorindex: entry.validatorindex
    }));

    console.log(JSON.stringify(latestThree, null, 2));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

fetchLatestValidatorIndexes();
