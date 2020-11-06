
//     PH= "PH",
//     KH_dKH= "KH_dKH",
//     TEMPERATUR_CELCIUS =  "TEMPERATUR_CELCIUS",
//     GH_dGH = "GH_dGH",
//     NO2_MG_PER_LITER = "NO2_MG_PER_LITER",
//     NO3_MG_PER_LITER = "NO3_MG_PER_LITER",
//     NH4_MG_PER_LITER = "NH4_MG_PER_LITER",
//     O2_MG_PER_LITER="O2_MG_PER_LITER"
// }

class WaterParameterUnit { 
    static readonly NONE = new WaterParameterUnit('NONE', '');
    static readonly MG_PER_LITER = new WaterParameterUnit('MG_PER_LITER', 'mg/l');
    static readonly CELCIUS = new WaterParameterUnit('MG_PER_LITER', '°C');
    static readonly DKH = new WaterParameterUnit('DKH', '°dKH');
    static readonly DGH = new WaterParameterUnit('DGH', '°dGH');


    private key: string; 
    private displayName: string;

    private constructor(key: string, displayName: string) { 
        this.displayName = displayName;
        this.key = key;
  }
}

export default class WaterParameter {
    static readonly TEMPERATURE = new WaterParameter('TEMPERATURE', WaterParameterUnit.CELCIUS, 'Temperatur');
    static readonly PH  = new WaterParameter('PH', WaterParameterUnit.NONE, "Säuregahlt (Ph)");
    static readonly KH = new WaterParameter('KH', WaterParameterUnit.DKH, 'Karbonathärte (KH)');
    static readonly GH = new WaterParameter('GH', WaterParameterUnit.DGH, 'Gesamthärte (GH)');
    static readonly NO2 = new WaterParameter('NO2', WaterParameterUnit.MG_PER_LITER, 'Nitrit (No2)');
    static readonly NO3 = new WaterParameter('NO3', WaterParameterUnit.MG_PER_LITER, 'Nitrat (No3)');
    static readonly NH4 = new WaterParameter('NH4', WaterParameterUnit.MG_PER_LITER, 'Ammonium (No4)');
    static readonly CO2 = new WaterParameter('CO2', WaterParameterUnit.MG_PER_LITER, 'Kohlenstoffdioxid (Co2)');
    static readonly FE = new WaterParameter('FE', WaterParameterUnit.MG_PER_LITER, 'Eisen (Fe)');


    private key: string;
    private unit: WaterParameterUnit;
    private displayName: string;
    
    private constructor(key: string, unit: WaterParameterUnit, displayName:string) {
        this.key = key;
        this.unit = unit;
        this.displayName = displayName;
    }

  toString() {
    return this.key;
  }
}