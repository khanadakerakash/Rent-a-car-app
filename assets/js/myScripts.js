/* -- jquery scripts are here -- */
(function($){

    //Mobile menu
    $(function(){

        $('.button-collapse').sideNav();

    });

    //Modal
    $(document).ready(function () {
        // initialize modal
        $('.modal').modal();
    });

    //Select option
    $(document).ready(function() {
        $('select').material_select();
    });

    // Materialize.toast(message);
    Materialize.toast();

})(jQuery); // end of jQuery name space