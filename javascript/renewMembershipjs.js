
//need to set up AIE submission to nF, create assignment for School Relations Coordinator to confirm AIE 
//Need to have Print Current COI button only light up if membership is active in nF, possibly create a date to select, pull COI report in PDF format, open in blank target, greyed out button
//if not active- maybe make a note that if they've just renewed, their new COI will not print until the day after current policy ends

//Receipt button only available for current, active membership. Will update with new policy receipt once it has been renewed.


$("#addAIE").on("click", function(){
    console.log("button working")
    $("#aie-modal").show();
    
});



$("#aie-close").on("click", function(){
    $("#aie-modal").hide();
});