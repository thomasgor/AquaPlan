import WaterParameter from './WaterParameter';

class MeasuringPoint { 
    private waterParameter: WaterParameter;
    private value: number; 

    public constructor(waterParameter: WaterParameter, value:number) {
        this.waterParameter = waterParameter;
        this.value = value;
    }

    public getWaterParameterKey():string { 
        return this.waterParameter.toString();
    }

    public getValue(): number { 
        return this.value;
    }
};

export default class Measuring { 

    private id: string;
    private date: Date; 
    private measuringPoints: MeasuringPoint[];

    // public constructor(data: Partial<Measuring>) {
    //     this.date = new Date(); 
    //     this.id = "";
    //     Object.assign(this, data);

    //     this.measuringPoints = new Array<MeasuringPoint>();
    // }

    public constructor(waterParameters:WaterParameter[]) {
        this.date = new Date();
        this.id = this.date.getTime().toString();
        this.measuringPoints = waterParameters.map(x => new MeasuringPoint(x, 0));
    }

    public getMeasuringPoints(): MeasuringPoint[]{ 
        return this.measuringPoints;
    }

    public getMeasuringData(): any {
        let waterParameterMap : Map<string, number> = this.measuringPoints.reduce((acc: Map<string,number>, point: MeasuringPoint) => {
            acc.set(point.getWaterParameterKey(), point.getValue());
            return acc;
        }, new Map<string,number>());
        
        let result:any = {
            measuringDate: this.date.toISOString(),
          //  waterParameters: waterParameterMap
        };

        return result;
        
    }
}