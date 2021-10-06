/**
 * Mappings for overwrites
 * example: [`@magento/venia-ui/lib/components/Main/main.js`]: './lib/components/Main/main.js'
 */
module.exports = componentOverride = {
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js`] :'@simicart/fbt/src/override/productFullDetail.js',
    [`@magento/peregrine/lib/talons/RootComponents/Product/productDetailFragment.gql.js`] : '@simicart/fbt/src/override/productDetailFragment.gql.js',
    [`@magento/venia-ui/lib/components/ProductOptions/option.css`]:'@simicart/fbt/src/override/fbtProduct/popup.css'
};
