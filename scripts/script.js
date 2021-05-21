function setPage(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const site = urlParams.get('site');
    switch(site){
        case "home":
            document.getElementById("view").setAttribute("src", "includes/home.html");
            document.getElementById("view").style.height= "1090px";
            $("#view").removeClass("about");
            $("#view").addClass("home");
            $("#about").removeClass("active");
            $("#home").addClass("active");
        break;
        case "about":
            document.getElementById("view").setAttribute("src", "includes/about.html");
            document.getElementById("view").style.height= "970px";
            $("#view").removeClass("home");
            $("#view").addClass("about");
            $("#home").removeClass("active");
            $("#about").addClass("active");
        break;
    }

}
