$(document).ready(function() {

    //short solution attempt
    $(document).on("click", "#primary-nav li", function(event) {
        event.preventDefault();

        var targetElement = $(this).find("a").attr("href");

        if ($(this).hasClass("active")) {
            $("#slide-down").slideUp();
            $(this).removeClass("active");
        } else {
            $(targetElement)
            .show()
            .siblings()
            .hide();

            $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");

            $("#slide-down").slideDown();
        }
    });

    // //long solution
    // $(document).on("click", "li.international", function() {
    //     event.preventDefault();
    //
    //     if ($(this).hasClass("active")) {
    //         $(this).removeClass("active");
    //         $("#slide-down").slideUp();
    //     } else {
    //         $("#international-drop").show();
    //         $("#politics-drop, #business-drop, #technology-drop, #culture-drop, #blogs-drop").hide();
    //
    //         $("#slide-down").slideDown();
    //         $(this).addClass("active");
    //         $("li.politics, li.business, li.technology, li.culture, li.blogs").removeClass("active");
    //     }
    // });
    //
    // $(document).on("click", "li.politics", function() {
    //     event.preventDefault();
    //
    //     if ($(this).hasClass("active")) {
    //         $(this).removeClass("active");
    //         $("#slide-down").slideUp();
    //     } else {
    //         $("#politics-drop").show();
    //         $("#international-drop, #business-drop, #technology-drop, #culture-drop, #blogs-drop").hide();
    //
    //         $("#slide-down").slideDown();
    //         $(this).addClass("active");
    //         $("li.international, li.business, li.technology, li.culture, li.blogs").removeClass("active");
    //     }
    // });
    //
    // $(document).on("click", "li.business", function() {
    //     event.preventDefault();
    //
    //     if ($(this).hasClass("active")) {
    //         $(this).removeClass("active");
    //         $("#slide-down").slideUp();
    //     } else {
    //         $("#business-drop").show();
    //         $("#international-drop, #politics-drop, #technology-drop, #culture-drop, #blogs-drop").hide();
    //
    //         $("#slide-down").slideDown();
    //         $(this).addClass("active");
    //         $("li.international, li.politics, li.technology, li.culture, li.blogs").removeClass("active");
    //     }
    // });
    //
    // $(document).on("click", "li.technology", function() {
    //     event.preventDefault();
    //
    //     if ($(this).hasClass("active")) {
    //         $(this).removeClass("active");
    //         $("#slide-down").slideUp();
    //     } else {
    //         $("#technology-drop").show();
    //         $("#international-drop, #politics-drop, #business-drop, #culture-drop, #blogs-drop").hide();
    //
    //         $("#slide-down").slideDown();
    //         $(this).addClass("active");
    //         $("li.international, li.politics, li.business, li.culture, li.blogs").removeClass("active");
    //     }
    // });
    //
    // $(document).on("click", "li.culture", function() {
    //     event.preventDefault();
    //
    //     if ($(this).hasClass("active")) {
    //         $(this).removeClass("active");
    //         $("#slide-down").slideUp();
    //     } else {
    //         $("#culture-drop").show();
    //         $("#international-drop, #politics-drop, #business-drop, #technology-drop, #blogs-drop").hide();
    //
    //         $("#slide-down").slideDown();
    //         $(this).addClass("active");
    //         $("li.international, li.politics, li.business, li.technology, li.blogs").removeClass("active");
    //     }
    // });
    //
    // $(document).on("click", "li.blogs", function() {
    //     event.preventDefault();
    //
    //     if ($(this).hasClass("active")) {
    //         $(this).removeClass("active");
    //         $("#slide-down").slideUp();
    //     } else {
    //         $("#blogs-drop").show();
    //         $("#international-drop, #politics-drop, #business-drop, #technology-drop, #culture-drop").hide();
    //
    //         $("#slide-down").slideDown();
    //         $(this).addClass("active");
    //         $("li.international, li.politics, li.business, li.technology, li.culture").removeClass("active");
    //     }
    // });


});
