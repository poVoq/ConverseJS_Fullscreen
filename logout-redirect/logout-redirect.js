(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // Register as an AMD module.
        define(["converse"], factory);
    } else {
        // Browser globals. If you're not using a module loader such as require.js,
        // then this line below executes. Make sure that your plugin's <script> tag
        // appears after the one from converse.js.
        factory(converse);
    }
}(this, function (converse) {
    'use strict';

    // Commonly used utilities and variables can be found under the "env"
    // namespace of the "converse" global.
    var Strophe = converse.env.Strophe,
        $iq = converse.env.$iq,
        $msg = converse.env.$msg,
        $pres = converse.env.$pres,
        $build = converse.env.$build,
        b64_sha1 = converse.env.b64_sha1,
        $ = converse.env.jQuery,
        _ = converse.env._,
        moment = converse.env.moment;

    // The following line registers your plugin.
    converse.plugins.add("logout-redirect", {

        /* Optional dependencies are other plugins which might be
         * overridden or relied upon, and therefore need to be loaded before
         * this plugin. They are called "optional" because they might not be
         * available, in which case any overrides applicable to them will be
         * ignored.
		 *
         * NB: These plugins need to have already been loaded via require.js.
         *
         * It's possible to make optional dependencies non-optional.
         * If the setting "strict_plugin_dependencies" is set to true,
         * an error will be raised if the plugin is not found.
         */
        'optional_dependencies': [],

        /* Converse.js's plugin mechanism will call the initialize
         * method on any plugin (if it exists) as soon as the plugin has
         * been loaded.
		 */
        'initialize': function () {
            /* Inside this method, you have access to the private
             * `_converse` object.
             */
            var _converse = this._converse;
			_converse.log("The logout-redirect plugin is being initialized");

            /* From the `_converse` object you can get any configuration
             * options that the user might have passed in via
             * `converse.initialize`. These values are stored in the
             * "user_settings" attribute.
             *
             * You can also specify new configuration settings for this
             * plugin, or override the default values of existing
             * configuration settings. This is done like so:
             */
             _converse.api.settings.update({
                 'initialize_message': 'Initializing logout-redirect plugin!'
             });
             
            /* The user can then pass in values for the configuration
             * settings when `converse.initialize` gets called.
             * For example:
             *
             *      converse.initialize({
             *           "initialize_message": "My plugin has been initialized"
             *      });
             *
             * And the configuration setting is then available via the
             * `user_settings` attribute:
             */
             alert(this._converse.user_settings.initialize_message);

            /* Besides `_converse.api.settings.update`, there is also a
             * `_converse.api.promises.add` method, which allows you to
             * add new promises that your plugin is obligated to fulfill.
             *
             * This method takes a string or a list of strings which
             * represent the promise names:
             *
             *      _converse.api.promises.add('myPromise');
             *
             * Your plugin should then, when appropriate, resolve the
             * promise by calling `_converse.api.emit`, which will also
             * emit an event with the same name as the promise.
             * For example:
             *
             *      _converse.api.emit('operationCompleted');
             *
             * Other plugins can then either listen for the event
             * `operationCompleted` like so:
             *
             *      _converse.api.listen.on('operationCompleted', function { ... });
             *
             * or they can wait for the promise to be fulfilled like so:
             *
             *      _converse.api.waitUntil('operationCompleted', function { ... });
             */
             _converse.api.listen.on('logout', function () {
                 console.log("logout event caught by logout-redirect plugin");
                 alert(this._converse.user_settings.logout_redirect_url);
             });
        }
    });
}));
