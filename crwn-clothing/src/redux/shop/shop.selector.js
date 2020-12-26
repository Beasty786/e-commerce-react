import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const collectionsSelector = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => createSelector(
    [collectionsSelector],
    collections => collections[collectionUrlParam]
)

export const selectCollectionsForPreview = createSelector(
    [collectionsSelector],
    collections => Object.keys(collections).map(key => collections[key])
)