//handling of hover operations on home page
$(document).ready(function() {
    $('#one-one').mouseenter(function() {
        console.log('pink entered');
        $('body').css("background-color", "pink");
        $('#text').css("background-color", "pink");
    });
    $('#one-one').mouseleave(function() {
        console.log('pink entered');
        $('body').css("background-color", "white");
        $('#text').css("background-color", "white");
    });
    $('#two-one').mouseenter(function() {
        console.log('pink entered');
        $('body').css("background-color", "lightCoral");
        $('#text').css("background-color", "lightCoral");
    });
    $('#two-one').mouseleave(function() {
        console.log('pink entered');
        $('body').css("background-color", "white");
        $('#text').css("background-color", "white");
    });
    $('#three-one').mouseenter(function() {
        console.log('pink entered');
        $('body').css("background-color", "LightSalmon");
        $('#text').css("background-color", "LightSalmon");
    });
    $('#three-one').mouseleave(function() {
        console.log('pink entered');
        $('body').css("background-color", "white");
        $('#text').css("background-color", "white");
    });
    $('#one-two').mouseenter(function() {
        console.log('pink entered');
        $('body').css("background-color", "lightYellow");
        $('#text').css("background-color", "lightYellow");
    });
    $('#one-two').mouseleave(function() {
        console.log('pink entered');
        $('body').css("background-color", "white");
        $('#text').css("background-color", "white");
    });
    $('#two-two').mouseenter(function() {
        console.log('pink entered');
        $('body').css("background-color", "palegreen");
        $('#text').css("background-color", "palegreen");
    });
    $('#two-two').mouseleave(function() {
        console.log('pink entered');
        $('body').css("background-color", "white");
        $('#text').css("background-color", "white");
    });
    $('#three-two').mouseenter(function() {
        console.log('pink entered');
        $('body').css("background-color", "lightskyblue");
        $('#text').css("background-color", "lightskyblue");
    });
    $('#three-two').mouseleave(function() {
        console.log('pink entered');
        $('body').css("background-color", "white");
        $('#text').css("background-color", "white");
    });
});