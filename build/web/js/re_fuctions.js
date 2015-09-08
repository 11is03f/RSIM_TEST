/**
 * Created by 60002860 on 8/27/2015.
 */

var velo ;
var area= 4 * 3.14139 * 4;
var dens=1.2;
var ref_height=20;
var turb_height;
var power_gen=0;
var cut_in_velo = 0;
var cut_out_velo = 200;
var fric_coff;

function get_turbine_height(newValue)
{
    turb_height = newValue;
    window.console.log("Turbine Height - " +turb_height);
}

function get_ref_height(newValue)
{
    ref_height = newValue;
    window.console.log("Reference Height - " +ref_height);
}

function get_density(newValue)
{
    dens=  newValue;
    window.console.log("Air Density - " +dens);
    document.getElementById("density").innerHTML=dens;
    document.getElementById("power").innerHTML=energy_gen_pre();
}

function get_area(newValue)
{
    var radius = newValue/2;
    area = parseFloat((3.14139 * radius * radius)).toFixed(2);
    window.console.log("Swept Area  - " +area);
    document.getElementById("area").innerHTML=area;
    document.getElementById("power").innerHTML=energy_gen_pre();
}

function update_fric_coff ()
{
    var e = document.getElementById("friction_coff");
    fric_coff = e.options[e.selectedIndex].value;
    window.console.log("Friction Coefficient- " +fric_coff);
    //window.alert(fric_coff);
}

function set_cut_in(newValue)
{
    cut_in_velo = newValue;
    window.console.log("Cut in Velocity- " + cut_in_velo);
    document.getElementById("c_in_velo").innerHTML= cut_in_velo;
}

function set_cut_out(newValue)
{
    cut_out_velo = newValue;
    window.console.log("Cut Out Velocity- " + cut_out_velo);
    document.getElementById("c_out_velo").innerHTML= cut_out_velo;
}

function get_velocity(newValue)
{
    velo=newValue;

    velo = velo * Math.pow(( turb_height / ref_height), fric_coff);

    window.console.log("Velocity : "+velo);
    document.getElementById("velocity").innerHTML=velo.toFixed(2);
    document.getElementById("power").innerHTML=  energy_gen_pre();
}