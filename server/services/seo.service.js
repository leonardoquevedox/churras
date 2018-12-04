const slug = require('slug');

const SEO = module.exports = {
    getSlugFrom: function(name) {
        return name ? slug(name.toLowerCase()) : '';
    }
}