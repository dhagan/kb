'use strict';

module.exports = {
  client: {
    lib: {
      // css: [
      //   'public/lib/bootstrap/dist/css/bootstrap.min.css',
      //   'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
      // ],
      // js: [
      //   'public/lib/angular/angular.min.js',
      //   'public/lib/angular-resource/angular-resource.min.js',
      //   'public/lib/angular-animate/angular-animate.min.js',
      //   'public/lib/angular-messages/angular-messages.min.js',
      //   'public/lib/angular-ui-router/release/angular-ui-router.min.js',
      //   'public/lib/angular-ui-utils/ui-utils.min.js',
      //   'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
      //   'public/lib/angular-file-upload/angular-file-upload.min.js',
      //   'public/lib/owasp-password-strength-test/owasp-password-strength-test.js'
      // ]
        css: [
            'public/lib/bootstrap/dist/css/bootstrap.css',
            'public/lib/bootstrap/dist/css/bootstrap-theme.css',
            'public/lib/gridstack/dist/gridstack.css',
            'public/lib/gridstack/dist/gridstack-extra.css'
        ],
        js: [
            'public/lib/jquery/dist/jquery.min.js',
            'public/lib/jquery-ui/jquery-ui.js',
            'public/lib/angular/angular.js',
            'public/lib/angular-resource/angular-resource.js',
            'public/lib/angular-animate/angular-animate.js',
            'public/lib/angular-messages/angular-messages.js',
            'public/lib/angular-ui-router/release/angular-ui-router.js',
            'public/lib/angular-ui-utils/ui-utils.js',
            'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            'public/lib/angular-file-upload/angular-file-upload.js',
            'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
            'public/lib/lodash/dist/lodash.min.js',
            'public/lib/gridstack/dist/gridstack.js',
            'public/lib/gridstack-angular/dist/gridstack-angular.js'

        ],
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
