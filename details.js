$('document').ready(function(){
    setInitialTheme();
    function setInitialTheme(){
        var mode = localStorage.getItem('mode');
        if (mode === "light") {
            setThemeFromStorage("light");
        }
    }

    function setThemeFromStorage(theme){
        var elements;
        var setting = $("#darkmode");
        if (theme === "light"){
            localStorage.setItem('mode', "light");
            elements = $(".dark");
            setting.removeClass("dark").addClass("light");
            elements.removeClass("dark").addClass("light");
        }
    }

    $("#darkmode").click(function (){
        setTheme();
    })

    function setTheme(){
        var elements;
        var setting = $("#darkmode");
        if (setting.hasClass("dark")){
            localStorage.setItem('mode', "light");
            elements = $(".dark");
            elements.removeClass("dark").addClass("light");
            return;
        }

        if (setting.hasClass("light")){
            localStorage.setItem('mode', "dark");
            elements = $(".light");
            elements.removeClass("light").addClass("dark");
            return;
        }
    }


    window.addEventListener('resize', adjustBottomHeight);

    function adjustBottomHeight() {
        var screenWidth = window.innerWidth;
        var rightcontainer = document.querySelector('.right-container');
        if (screenWidth > 520){
            rightcontainer.style.paddingTop = '0px';
        }

        var left = document.querySelector('.left');
        var right = document.querySelector('.right');
        
        if (right.offsetTop > left.offsetTop) {
            rightcontainer.style.paddingTop = right.offsetHeight + 10 + 'px';
        }
    }

    adjustBottomHeight();

    var $paragraph = $("#description");
    var text = $paragraph.html();
    var updatedText = text.replace(/([A-ZĀČĒĢĪĶĻŅŠŪŽ])/g, '<span class="uppercase">$1</span>');
    $paragraph.html(updatedText);
});