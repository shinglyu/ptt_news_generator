var pushdown_ad_block = new Array();
var pushdown_ad_block = getPushdown_ad_block();
function getPushdown_ad_block() {
   return pushdown_ad_block[Math.floor(Math.random() * pushdown_ad_block.length)];
}