/**

 * @module converse-logout-redirect
 * @description
 * Converse.js plugin to add a redirect URL on logout.
 * Author: poVoq
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["converse"], factory);
    } else {
        factory(converse);
    }
}(this, function (converse) {
    var _converse = null;

    converse.plugins.add("logout-redirect", {
        'dependencies': [],

        'initialize': function () {

            _converse.api.listen.on("logout", function () {
	             //this._converse.api.user.logout();

               console.log("login-redirect plugin has run");
            };
        };
    };

}));
