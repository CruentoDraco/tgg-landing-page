function setPage(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const fromApp = urlParams.get('fromApp');
    switch (fromApp) {
        case "instagram":
           setLink("Instagram"); 
        break;
        case "twitter":
            setLink("Twitter");
        break;
        case "twitch":
            setLink("Twitch");
        break;
        case "youtube":
            setLink("Youtube");    
        break;
        default:
            setLink("");
        break;
    }
}

function setLink(platform){
    htmlLinkBtn = "";
    if(platform != ""){
        htmlLinkBtn =  '<a href="https://www.links.cruentodraco.de/?style=tgg&fromApp='+ String.toLowerCase(platform) +'" class="btn btn-outline btn-block" role="button" target="_blank"><i class="fas fa-link">&nbsp;</i>Cooler Stuff auch Links genannt</a>'
    } else{
        htmlLinkBtn =  '<a href="https://www.links.cruentodraco.de/?style=tgg" class="btn btn-outline btn-block" role="button" target="_blank"><i class="fas fa-link">&nbsp;</i>Cooler Stuff auch Links genannt</a>'
    }
    document.getElementById("link-btn").innerHTML = htmlLinkBtn;
}

