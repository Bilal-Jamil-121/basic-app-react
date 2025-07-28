import axious from "axios";

//  https://v6.exchangerate-api.com/v6/472eb586fb4cf8ba4c17c1be/latest/USD

const api = axious.create({
  baseURL: "https://v6.exchangerate-api.com/v6/472eb586fb4cf8ba4c17c1be",
});

// get request

export const Currencyconvertor = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
