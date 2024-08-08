import axios from 'axios';

const API_URL = "http://39.61.51.195:8004/account/register";

export const registerUser = async (data) => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error.response ? error.response.data : error.message);
    throw error.response || error;
  }
};
