/**
 * Expose `gsce`
 */

module.exports = gsce;

/**
 * Initialize `gsce`
 *
 * @param {String} id
 */

function gsce(id) {
  load(url(id));
}

/**
 * Get the url
 */
function url(id) {
  return ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.google.com/cse/cse.js?cx=' + id;
}

/**
 * Load the GSCE script tag
 *
 * @param {String} url
 */

function load(url) {
  var first = document.getElementsByTagName('script')[0];
  var js = document.createElement('script');
  js.type = 'text/javascript';
  js.async = true;
  js.src = url;
  first.parentNode.insertBefore(js, first);
}