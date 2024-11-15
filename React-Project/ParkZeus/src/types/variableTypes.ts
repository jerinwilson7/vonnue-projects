export type VariableType = {
    id: number;
    name: string;
    type: string;
    value: number | ValueType[];
    publish: boolean;
    sensorId?: number;
    computedValue: number;
}

type ValueType = {
    type:string,
    id ?:number
    operation ?:string
}
