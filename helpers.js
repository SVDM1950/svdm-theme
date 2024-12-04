/*
 * Custom theme helpers for Handlebars.js
 */

let themeHelpers = function (Handlebars) {
    return {
        getPostIndexUrl: function() {
            this.type = 'blogpage';
            return Handlebars.helpers.menuUrl.apply(this);
        }
    };
};

module.exports = themeHelpers;
