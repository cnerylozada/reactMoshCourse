export const numberOfPages = (totalOfItems, itemsByPage) => {
    return totalOfItems % itemsByPage === 0
        ? totalOfItems / itemsByPage : Math.floor(totalOfItems / itemsByPage) + 1;
}

export const ITEMS_BY_PAGE = 3;