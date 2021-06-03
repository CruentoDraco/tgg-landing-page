function setPage(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const site = urlParams.get('site');
    switch(site){
        case "home":
            $('#view').load('includes/home.html');
            $("#about").removeClass("active");
            $("#home").addClass("active");
        break;
        case "about":
            $('#view').load('includes/about.html');
            $("#home").removeClass("active");
            $("#about").addClass("active");
        break;
        default:
            $('#view').load('includes/home.html');
            $("#home").addClass("active");
        break;
    }

}