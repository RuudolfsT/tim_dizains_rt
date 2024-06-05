$('document').ready(function(){
    setInitialTheme();
    function setInitialTheme(){
        var mode = localStorage.getItem('mode');
        if (mode === ""){
            localStorage.setItem('mode', "dark");
        }
        else if (mode === "light") {
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

    $("#stop1").click(function (){
        window.location.href = "details1.html";
    });

    $("#stop2").click(function (){
        window.location.href = "details2.html";
    });

    $("#stop3").click(function (){
        window.location.href = "details3.html";
    });

    $("#stop4").click(function (){
        window.location.href = "details4.html";
    });
    
    $("#stop5").click(function (){
        window.location.href = "details5.html";
    });
});