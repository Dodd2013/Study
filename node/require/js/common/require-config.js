requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'vendor',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../js/app',
        common: '..js/common',
        jquery: 'jquery/dist/jquery',
        bootstrap: 'bootstrap/dist/js/bootstrap'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {  //bootstrap需要jquery依赖
            deps: ['jquery']
        }
    }
});