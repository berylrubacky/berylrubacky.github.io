function isSelected(id){
    return document.getElementById(id).classList.contains("selected")
}
function select(index){
    switch(index){
        case 0:
            if(!isSelected("nav-projects")){
                document.getElementById("nav-projects").classList.add("selected");
                document.getElementById("projects-container").classList.add("selected");
                document.getElementById("nav-experience").classList.remove("selected");
                document.getElementById("experience-container").classList.remove("selected");
            }
            break;
        default:
        if(!isSelected("nav-experience")){
                document.getElementById("nav-experience").classList.add("selected");
                document.getElementById("experience-container").classList.add("selected");
                document.getElementById("nav-projects").classList.remove("selected");
                document.getElementById("projects-container").classList.remove("selected");
            }
            break;
    }
}
function mobileSelect(index){
    switch(index){
        case 0:
            if(!isSelected("mobile-about")){
                document.getElementById("mobile-about").classList.add("selected");
                document.getElementById("bio-container").classList.add("mobile-selected");
                document.getElementById("info-container").classList.remove("mobile-selected");
                document.getElementById("mobile-projects").classList.remove("selected");
                document.getElementById("projects-container").classList.remove("mobile-selected");
                document.getElementById("mobile-experience").classList.remove("selected");
                document.getElementById("experience-container").classList.remove("mobile-selected");
            }
            break;
        case 1:
            if(!isSelected("mobile-projects")){
                document.getElementById("mobile-projects").classList.add("selected");
                document.getElementById("projects-container").classList.add("mobile-selected");
                document.getElementById("mobile-about").classList.remove("selected");
                document.getElementById("bio-container").classList.remove("mobile-selected");
                document.getElementById("mobile-experience").classList.remove("selected");
                document.getElementById("experience-container").classList.remove("mobile-selected");
                if(!isSelected("info-container")){
                    document.getElementById("info-container").classList.add("mobile-selected");
                }
            }
            break;
        default:
            if(!isSelected("mobile-experience")){
                document.getElementById("mobile-experience").classList.add("selected");
                document.getElementById("experience-container").classList.add("mobile-selected");
                document.getElementById("mobile-about").classList.remove("selected");
                document.getElementById("bio-container").classList.remove("mobile-selected");
                document.getElementById("mobile-projects").classList.remove("selected");
                document.getElementById("projects-container").classList.remove("mobile-selected");
                if(!isSelected("info-container")){
                    document.getElementById("info-container").classList.add("mobile-selected");
                }
            }
            break;
    }
}