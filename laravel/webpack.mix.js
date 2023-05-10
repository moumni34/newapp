const mix = require('laravel-mix');
const lodash = require("lodash");
const folder = {
    src: "resources/", // source files
    dist: "public/", // build files
    dist_assets: "public/assets/" //build assets files
};
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 var third_party_assets = {
        css_js: [
            {"name": "jquery", "assets": ["./node_modules/jquery/dist/jquery.min.js"]},
            
        ]
    };

//     //copying third party assets
    lodash(third_party_assets).forEach(function (assets, type) {
        if (type == "css_js") {
            lodash(assets).forEach(function (plugins) {
                var name = plugins['name'],
                    assetlist = plugins['assets'],
                    css = [],
                    js = [];
                lodash(assetlist).forEach(function (asset) {
                    var ass = asset.split(',');
                    for (let i = 0; i < ass.length; ++i) {
                        if(ass[i].substr(ass[i].length - 3)  == ".js") {
                            js.push(ass[i]);
                        } else {
                            css.push(ass[i]);
                        }
                    };
                });
                if(js.length > 0){
                    mix.combine(js, folder.dist_assets + "/plugins/" + name + "/" + name + ".min.js");
                }
                if(css.length > 0){
                    mix.combine(css, folder.dist_assets + "/plugins/" + name + "/" + name + ".min.css");
                }
            });
        }
    });

    mix.copy('resources/img', 'public/assets/img');
    mix.copy('resources/fonts', 'public/assets/fonts');
    mix.copy('resources/css/style.css', 'public/assets/css/style.css');
    mix.copy('resources/css/feathercss.css', 'public/assets/css/feather.css');
    mix.copy('resources/css/feather.css', 'public/assets/plugins/feather/feather.css');
    mix.copy('resources/js/script.js', 'public/assets/js');
    mix.copy('resources/js/validation.js', 'public/assets/js');
    mix.copy('resources/js/pages/fonts', 'public/assets/plugins/feather/fonts');
    mix.copy('resources/js/chart-data.js', 'public/assets/plugins/apexchart');
    mix.copy('resources/js/pages/dropzone', 'public/assets/plugins/dropzone');
    mix.copy('node_modules/bootstrap/dist/css/bootstrap.css', 'public/assets/css');
    mix.copy('node_modules/bootstrap/dist/css/bootstrap.css.map', 'public/assets/css');
    mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/assets/css');
    mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css.map', 'public/assets/css');
    mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/assets/js');
    mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.js.map', 'public/assets//js');
    mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/assets/js');
    mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map', 'public/assets/js');
    mix.copy('node_modules/aos/dist', 'public/assets/plugins/aos');
    mix.copy('node_modules/apexcharts/dist/apexcharts.min.js', 'public/assets/plugins/apexchart');
    mix.copy('node_modules/@adactive/bootstrap-tagsinput/dist/bootstrap-tagsinput.css', 'public/assets/plugins/bootstrap-tagsinput/css/bootstrap-tagsinput.css');
    mix.copy('node_modules/@adactive/bootstrap-tagsinput/dist/bootstrap-tagsinput.js', 'public/assets/plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.js');
    mix.copy('node_modules/feather-icons/dist/feather.min.js', 'public/assets/plugins/feather/feather.min.js');
    mix.copy('node_modules/feather-icons/dist/feather.min.js.map', 'public/assets/plugins/feather/feather.min.js.map');
    mix.copy('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'public/assets/plugins/fontawesome/css');
    mix.copy('node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css', 'public/assets/plugins/fontawesome/css');
    mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/assets/plugins/fontawesome/webfonts');
    mix.copy('node_modules/select2/dist/css', 'public/assets/plugins/select2/css');
    mix.copy('node_modules/select2/dist/js/select2.min.js', 'public/assets/plugins/select2/js');
    mix.copy('node_modules/waypoints/lib/jquery.waypoints.min.js', 'public/assets/plugins/countup');
    mix.copy('node_modules/counterup/jquery.counterup.js', 'public/assets/plugins/countup');
    mix.copy('node_modules/counterup/jquery.counterup.min.js', 'public/assets/plugins/countup');
    mix.copy('node_modules/theia-sticky-sidebar/dist', 'public/assets/plugins/theia-sticky-sidebar');
    mix.copy('node_modules/slick-carousel/slick/slick-theme.css', 'public/assets/plugins/slick');
    mix.copy('node_modules/slick-carousel/slick/slick.css', 'public/assets/plugins/slick');
    mix.copy('node_modules/slick-carousel/slick/slick.js', 'public/assets/plugins/slick');
    mix.copy('node_modules/owl.carousel/dist/assets/owl.carousel.min.css', 'public/assets/css');
    mix.copy('node_modules/owl.carousel/dist/assets/owl.theme.default.min.css', 'public/assets/css');
    mix.copy('node_modules/owl.carousel/dist/owl.carousel.min.js', 'public/assets/js');
    mix.copy('node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js', 'public/assets/js');
    mix.copy('node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js.map', 'public/assets/js');
    mix.copy('node_modules/jquery-circle-progress/dist/circle-progress.min.js', 'public/assets/js');

