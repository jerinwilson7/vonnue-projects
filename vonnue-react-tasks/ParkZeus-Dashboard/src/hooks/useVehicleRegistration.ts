import axios from "axios";
import { BASE_URL, token } from "../config";
import { authHeader } from "../utils";

export type VehicleDetailsType = {
  iid: string;
  lp: string;
  type: string;
  vehicleType: string;
};

const addVehicle = (vehicleDetails: VehicleDetailsType) => {
    const res = axios.post(`${BASE_URL}/ac/ids`, vehicleDetails, {
    params: {
      scope: "ACCESS_CONTROL",
    },
    headers: authHeader(token),
  });

  console.log(res);
  
};

export default addVehicle;
