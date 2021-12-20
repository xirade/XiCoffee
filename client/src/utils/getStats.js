import { compareDate, formatFromTo } from "./useDate";

export default function getStats(nsales, data, type) {
  return Object.entries(
    data
      .map((product) => product.cartContent)
      .flat()
      .reduce((acc, currentElem) => {
        let tmp = type === "last" ? currentElem.date : currentElem.payload.name;
        const finalPrice =
          currentElem.quantity > 1
            ? currentElem.payload.price * currentElem.quantity
            : currentElem.payload.price;
        // check if value exist
        if (typeof acc[tmp] === "undefined") {
          switch (type) {
            case "top":
              acc[tmp] = currentElem.quantity;
              break;
            case "uniq":
              acc[tmp] = 1;
              break;
            case "last":
              acc[tmp] = finalPrice;
              break;

            default:
              break;
          }
        } else {
          switch (type) {
            case "top":
              acc[tmp] += currentElem.quantity;
              break;
            case "uniq":
              acc[tmp] += 1;
              break;
            case "last":
              acc[tmp] += finalPrice;
              break;

            default:
              break;
          }
        }

        return acc;
      }, {})
  )
    .sort((a, b) => {
      return type === "last" ? compareDate(b[0], a[0]) : b[1] - a[1];
    })
    .map((item) => {
      const filteredValue =
        type === "last" ? formatFromTo(item[0], "D.M.YY") : item[0];
      return {
        name: filteredValue,
        totalQuantity: item[1],
      };
    })
    .slice(0, nsales);
}
