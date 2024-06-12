document.addEventListener("DOMContentLoaded", function () {
    var source = document.getElementById("login-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {};
    var html = template(context);
    document.getElementById("login-container").innerHTML = html;
});

