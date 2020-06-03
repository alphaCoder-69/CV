/*       LIGHT THEME       */

function lightTheme() {
    var heading = document.getElementById("heading");
    heading.style.color = "deepskyblue";

    var icon1 = document.getElementsByClassName("sun");
    icon1[0].style.visibility = "hidden";

    var icon2 = document.getElementsByClassName("moon");
    icon2[0].style.visibility = "visible";

    var y = document.getElementById("dark");
    y.style.visibility = "visible";
    y.style.cursor = "pointer";

    var x = document.getElementsByClassName("theme-body");
    x[0].style.backgroundColor = "#ffffff";

    var button = document.getElementsByClassName("button");
    button[0].style.borderColor = "deepskyblue";

    var light = document.getElementsByClassName("light-button");
    light[0].style.backgroundColor = "white";
    light[0].style.color = "white";

    var clickBtn = document.getElementById("light");
    clickBtn.style.cursor = "default";

    var darkBtn = document.getElementsByClassName("dark-button");
    darkBtn[0].style.color = "deepskyblue";
    darkBtn[0].style.backgroundColor = "white";



}


/*       DARK THEME       */

function darkTheme() {

    var heading = document.getElementById("heading");
    heading.style.color = "#39ff14";

    var icon1 = document.getElementsByClassName("sun");
    icon1[0].style.visibility = "visible";

    var icon2 = document.getElementsByClassName("moon");
    icon2[0].style.visibility = "hidden";

    var x = document.getElementsByClassName("theme-body");
    x[0].style.backgroundColor = "#111";

    var button = document.getElementsByClassName("button");
    button[0].style.borderColor = "#39ff14";

    var light = document.getElementsByClassName("light-button");
    light[0].style.backgroundColor = "#111";
    light[0].style.color = "#39ff14";

    var click = document.getElementById("light");
    click.style.cursor = "pointer";

    var clickBtn = document.getElementById("dark");
    clickBtn.style.cursor = "default";

    var darkBtn = document.getElementsByClassName("dark-button");
    darkBtn[0].style.color = "#111";
    darkBtn[0].style.backgroundColor = "#111";
}
