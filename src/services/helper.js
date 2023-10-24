const dateOptions = {
  weekday: "short",
  day: "numeric",
  month: "long",
  year: "numeric",
};

export const dateFormat = (date) => {
  return new Date(date).toLocaleDateString("en-GB", dateOptions);
};

export const numberFormat = (num, digits = 1) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: " Thousand" },
    { value: 1e6, symbol: " Million" },
    { value: 1e9, symbol: " Billion" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

export const runtimeToDuration = (runtime) => {
  const min = (runtime % 60).toString().padStart(2, "0");
  const hour = Math.floor(runtime / 60)
    .toString()
    .padStart(2, "0");

  return `${hour}h ${min}m`;
};
