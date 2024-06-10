function menu() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById('topHeader').classList.add("bg-white");
        document.getElementById('topHeader').classList.add("shadow-lg");
    } else {
        if (document.documentElement.scrollTop == 0 && !xStatus) {
            document.getElementById('topHeader').classList.remove('bg-white');
            document.getElementById('topHeader').classList.remove('shadow-lg');
        }
    }
}
var xStatus = false;

function showHideMenu() {
    if (!xStatus) {
        document.getElementById('menu').classList.remove("hidden");
        document.getElementById('menu').classList.add("flex");
        if (document.documentElement.scrollTop < 20) {
            document.getElementById('topHeader').classList.add("bg-white");
        }
        xStatus = true;
    } else {
        if (document.documentElement.scrollTop < 20) {
            document.getElementById('topHeader').classList.remove("bg-white");
        }
        xStatus = false;
        document.getElementById('menu').classList.add("hidden");
        document.getElementById('menu').classList.remove("flex");
    }
}