// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($('#home-tpl').html());
    EmployeeListView.prototype.template = Handlebars.compile($('#employee-list-tpl').html());

    var service = new EmployeeService();
    service.initialize().done(function () {
        $('body').html(new HomeView(service).render().$el);
    });
    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
      StatusBar.overlayWebView( false );
      StatusBar.backgroundColorByHexString('#ffffff');
      StatusBar.styleDefault();
    }, false);
    /* ---------------------------------- Local Functions ---------------------------------- */

}());
