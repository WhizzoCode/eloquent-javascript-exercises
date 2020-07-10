/**
 * # Robot efficiency
 * 
 * Can you write a robot that finishes the delivery task faster than
 * goalOrientedRobot? If you observe that robot’s behavior, what obviously
 * stupid things does it do? How could those be improved?
 * 
 * If you solved the previous exercise, you might want to use your compareRobots
 * function to verify whether you improved the robot.
 */

import { VillageState,
         findRoute,
         roadGraph,
         runRobot,
         goalOrientedRobot } from "./robot.js";
import { compareRobots } from "./measuring.js";

function yourRobot({place, parcels}, route) {
  if (route.length == 0) {
    // let parcel = parcels[0];
    let parcel = parcels.map(p => {
      return {parcel: p, turns: findRoute(roadGraph, place, p.place).length};
    }).reduce((min, p) => {
      if (p.turns < min.turns) return p;
      else return min;
    });
    parcel = parcel.parcel;
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

// runRobot(VillageState.random(), yourRobot, []);
compareRobots(goalOrientedRobot, [], yourRobot, []);
