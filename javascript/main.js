function updateOutput(){
    var a= $("input[name=10k]").val();
    var b= $("input[name=25k]").val();
    var c= $("input[name=insurance-cost]").val();
    var d= $("input[name=premier-cost]").val();
    var e= $("input[name=enhanced-cost]").val();
    var f= $("input[name=standard-cost]").val();
    console.log(a);
    console.log(b);
    console.log(c);
    console.log (d);
    console.log(e);
    console.log(f);

    if($("#bppcoverage-1").on("click", function(){
        $("#bpp").append( "$ "+ a)
    }));
    
    if($("#bppcoverage-2").on("click", function(){
        $("#bpp").append("$ " + b)
    }));

    if($("#insurance-radio").on("click", function(){
        console.log("you clicked insurance")
        $("#insurance-p").append("$ " + c)
    }));
    if($("#premier").on("click", function(){
        $("#dues-p").append("$ "+ d)
    }));
    if($("#enhanced").on("click", function(){
        $("#dues-p").append("$ "+ e)
    }));
    if($("#standard").on("click", function(){
        $("#dues-p").append("$ "+ f)
    }));

    }

    $("#enroll-submit").on("click", function(){
        $("#enrollment-modal").hide();
        });

    $(document).ready(function() {
    $("#enrollment-modal").show();
    $("#calc-modal").show();

    
    updateOutput();



    });
   
   