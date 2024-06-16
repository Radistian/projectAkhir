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

// let tag = document.getElementById("tag")
// tag.addEventListener('mouseenter', function () {
//     tag.style.width = "30px"
//     tag.style.height = "30px"
//     tag.style.backgroundColor = "blue"
//     tag.style.borderRadius = "5px"
// })
// tag.addEventListener('mouseleave', function () {
//     tag.style.width = "28px"
//     tag.style.height = "28px"
//     tag.style.backgroundColor = "transparent"

// })

function like() {
    const like = document.getElementById('like').classList.toggle('like')
    console.log(like);
    if (like==true) {
        document.getElementById('like').classList.remove('bx-heart')
        document.getElementById('like').classList.add('bxs-heart')
    }
    else{
        document.getElementById('like').classList.remove('bxs-heart')
        document.getElementById('like').classList.add('bx-heart')
    }
}
function like2() {
    const like = document.getElementById('like2').classList.toggle('like2')
    console.log(like);
    if (like==true) {
        document.getElementById('like2').classList.remove('bx-heart')
        document.getElementById('like2').classList.add('bxs-heart')
    }
    else{
        document.getElementById('like2').classList.remove('bxs-heart')
        document.getElementById('like2').classList.add('bx-heart')
    }
}
function like3() {
    const like = document.getElementById('like3').classList.toggle('like3')
    console.log(like);
    if (like==true) {
        document.getElementById('like3').classList.remove('bx-heart')
        document.getElementById('like3').classList.add('bxs-heart')
    }
    else{
        document.getElementById('like3').classList.remove('bxs-heart')
        document.getElementById('like3').classList.add('bx-heart')
    }
}
function like4() {
    const like = document.getElementById('like4').classList.toggle('like4')
    console.log(like);
    if (like==true) {
        document.getElementById('like4').classList.remove('bx-heart')
        document.getElementById('like4').classList.add('bxs-heart')
    }
    else{
        document.getElementById('like4').classList.remove('bxs-heart')
        document.getElementById('like4').classList.add('bx-heart')
    }
}

function switchDark(){
    const dark = document.documentElement.classList.toggle('dark')
    console.log(dark);
    if (dark == true) {
        document.getElementById('iconDark').classList.remove('bxs-moon')
        document.getElementById('iconDark').classList.add('bxs-sun')
    }
    else{
        document.getElementById('iconDark').classList.add('bxs-moon')
        document.getElementById('iconDark').classList.remove('bxs-sun')
    }
    }