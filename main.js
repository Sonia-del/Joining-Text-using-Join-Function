function getpara1(){
    var inputs = [];

    for(var i = 1 ; i <=6 ; i++ )
    {
        var temp = document.getElementById("input_box_"+i) .value;
        inputs.push(temp);
    }
    inputs.join(". ");
    document.getElementById("showpara_1").innerHTML = inputs.join(". ");

}

function getpara2(){
    var inputs_2 = [];

    for(var j = 7 ; j <=12 ; j++ )
    {
        var temp_2 = document.getElementById("input_box_para_"+j) .value;
        inputs_2.push(temp_2);
    }
    inputs_2.join(". ");
    document.getElementById("showpara_2").innerHTML = inputs_2.join(". ");

}