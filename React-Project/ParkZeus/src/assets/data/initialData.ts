// const sensors = [
//     {
//       id: 1,
//       name: "Entry",
//     },
//     {
//       id: 2,
//       name: "Exit",
//     },
//   ];

import { VariableType } from "../../types/variableTypes";

  
  export const variables:VariableType[] = [
    {
      id: 1,
      name: "CAR_En",
      type: "BASE",
      value: 56,
      publish: false,
      sensorId: 1,
      computedValue: 56,
    },
    {
      id: 2,
      name: "CAR_Ex",
      type: "BASE",
      value: 0,
      publish: false,
      sensorId: 1,
      computedValue: 0,
    },
    {
      id: 3,
      name: "CAR_En",
      type: "BASE",
      value: 0,
      publish: false,
      sensorId: 2,
      computedValue: 0,
    },
    {
      id: 4,
      name: "CAR_Ex",
      type: "BASE",
      value: 17,
      publish: false,
      sensorId: 2,
      computedValue: 17,
    },
    {
      id: 7,
      name: "Total Capacity",
      type: "CONSTANT",
      value: 100,
      publish: false,
      computedValue: 100,
    },
    {
      id: 8,
      name: "Sensor Variable 1",
      type: "SENSOR",
      value: [
        {
          type: "VARIABLE",
          id: 1,
        },
      ],
      publish: false,
      computedValue: 56,
    },
    {
      id: 9,
      name: "Sensor Variable 2",
      type: "SENSOR",
      value: [
        {
          type: "VARIABLE",
          id: 3,
        },
      ],
      publish: false,
      computedValue: 0,
    },
    {
      id: 10,
      name: "Occupancy",
      type: "DYNAMIC",
      value: [
        {
          type: "VARIABLE",
          id: 8,
        },
        {
          type: "OPERATION",
          operation: "SUBTRACTION",
        },
        {
          type: "VARIABLE",
          id: 9,
        },
      ],
      publish: false,
      computedValue: 56,
    },
  ]