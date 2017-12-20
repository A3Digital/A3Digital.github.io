function prevent() {
    if(event.which == 37 || event.which == 38 || event.which == 39 || event.which == 40 || event.which == 32) {
        retry();
        event.preventDefault();
    }
}