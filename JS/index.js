$("#lightswitch i").click(function () {
    var isDark = $("body").is(".dark");
    $("body").toggleClass("dark", !isDark);
    $(this).toggleClass("fa-moon", isDark).toggleClass("fa-sun", !isDark);
});