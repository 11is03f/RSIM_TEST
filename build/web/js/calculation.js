/**
 * Created by 60002860 on 8/21/2015.
 */

function power_gen(density,swept_area,velocity,gen_eff,mech_eff,coff_perfo) {
    var power_gen;
    power_gen = 0.5*density*pow(velocity,3)*swept_area*gen_eff*mech_eff*coff_perfo;
    return power_gen;
}
