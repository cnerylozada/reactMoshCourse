export const numberOfPages = (totalOfItems, itemsByPage) => {
  return totalOfItems % itemsByPage === 0
    ? totalOfItems / itemsByPage
    : Math.floor(totalOfItems / itemsByPage) + 1;
};

export const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const capitalizeText = (text) => {
  return text
    .split(" ")
    .map((_) => capitalizeString(_))
    .join(" ");
};

export const showItemsByPage = (items, index) => {
  let begin = ITEMS_BY_PAGE * index;
  let end = begin + ITEMS_BY_PAGE;
  return items.slice(begin, end);
};

export const ITEMS_BY_PAGE = 4;
