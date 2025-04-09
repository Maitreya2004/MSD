var mobiles = [
    { name: 'iPhone 13', vendor: 'Apple' },
    { name: 'Galaxy S21', vendor: 'Samsung' },
    { name: 'OnePlus 9', vendor: 'OnePlus' },
    { name: 'Pixel 6', vendor: 'Google' },
];
function getMobileByVendor(vendor) {
    return mobiles.filter(function (mobile) { return mobile.vendor === vendor; });
}
var appleMobiles = getMobileByVendor('Apple');
var googleMobiles = getMobileByVendor('Google');
var samsungMobiles = getMobileByVendor('Samsung');
console.log(appleMobiles);
console.log(googleMobiles);
console.log(samsungMobiles);
