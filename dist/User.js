/**
 * User
 * @version v0.0.1 - 2016-07-14
 * @link 
 * @author  <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('UserModule', ['pascalprecht.translate'])
.config(["$translateProvider", function($translateProvider) {
    'use strict';

    // $translateProvider
    //     .preferredLanguage('en_US')
    //     .useSanitizeValueStrategy('escape')
    //     .translations('en_US', {
    //         'User': {
    //             'name': {
    //                 'first': 'Luke'
    //             }
    //         }
    //     })
    //     .useMissingTranslationHandlerLog();
    }])

    .factory('UserService', function(){
        'use strict';
        var user = {};

        user.emailAddress= '';
        user.id= '';
        user.firstName= '';
        user.lastName= '';
        user.isLoggedIn = false;
        user.organizationName = '';
        user.token = '';
        user.status = '';
        user.invitationExpired = true;

        user.getFullName = function() {
            return 'sahar';
        };

        return user;
    });
