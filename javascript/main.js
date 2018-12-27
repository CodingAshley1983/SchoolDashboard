var a = $("input[name=10k]").val();
var b = $("input[name=25k]").val();
var c = $("input[name=insurance-cost]").val();
var d = $("input[name=premier-cost]").val();
var e = $("input[name=enhanced-cost]").val();
var f = $("input[name=standard-cost]").val();
var total = [];

//takes the form input data, appends it to the calculation modal, pushes the value to the 'total' array, calls the 
//function that adds up the 'total' array
function updateOutput() {

    if ($("#bppcoverage-1").on("click", function () {
            $("#bpp").append("$ " + a);
            total.push(a);
            getSum();

        }));

    if ($("#bppcoverage-2").on("click", function () {
            $("#bpp").append("$ " + b);
            total.push(b);
            getSum();
        }));

    if ($("#insurance-radio").on("click", function () {
          
            $("#insurance-p").append("$ " + c);
            total.push(c);
            getSum();
        }));
    if ($("#premier").on("click", function () {
            $("#dues-p").append("$ " + d);
            total.push(d);
            getSum();
        }));
    if ($("#enhanced").on("click", function () {
            $("#dues-p").append("$ " + e);
            total.push(e);
            getSum();
        }));
    if ($("#standard").on("click", function () {
            $("#dues-p").append("$ " + f);
            total.push(f);
            getSum();
        }));

}


//Looping over the 'total' array as new values are added, appending total to the page
function getSum() {
    var sum = 0
    for (var i = 0; i < total.length; i++) {
        sum += parseInt(total[i]);
    }
    console.log(sum);
    $("#total-p").text("$: " + sum + ".00")

}

$("#enroll-submit").on("click", function () {
    $("#enrollment-modal").hide();

});





$(document).ready(function () {
    $("#enrollment-modal").show();
    $("#calc-modal").show();



    updateOutput();







});