(function () {
    var USERAGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36';
    var VENDOR = 'Google Inc.';
    var PLATFORM = 'Mac';

    var defProp = function (prop, value) {
        Object.defineProperty(window.navigator, prop, {
            get: function () {
                return value;
            }
        });
    };

    defProp('userAgent', USERAGENT);
    defProp('appVersion', USERAGENT);
    defProp('vendor', VENDOR);
    defProp('platform', PLATFORM);
}());
