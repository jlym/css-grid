let state = {
    menuToggled: false
};

$( document ).ready(function() {
    $ ( ".menu" ).click(function(event) {
        state.menuToggled = !state.menuToggled;

        if (state.menuToggled) {
            $( ".menu ul").css("display", "grid")
            $( ".menu .close").css("display", "inline")
            $( ".menu .open").css("display", "none")
        } else {
            $( ".menu ul").css("display", "none")
            $( ".menu .close").css("display", "none")
            $( ".menu .open").css("display", "inline")
        }
        
    });
});