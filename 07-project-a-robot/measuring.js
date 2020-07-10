/**
 * # Measuring a robot
 * 
 * It’s hard to objectively compare robots by just letting them solve a few
 * scenarios. Maybe one robot just happened to get easier tasks or the kind of
 * tasks that it is good at, whereas the other didn’t.
 * 
 * Write a function compareRobots that takes two robots (and their starting
 * memory). It should generate 100 tasks and let each of the robots solve each
 * of these tasks. When done, it should output the average number of steps each
 * robot took per task.
 * 
 * For the sake of fairness, make sure you give each task to both robots, rather
 * than generating different tasks per robot.
*/

import { VillageState,
         routeRobot,
         goalOrientedRobot } from './robot.js';

function runSilentRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

export function compareRobots(robot1, memory1, robot2, memory2) {
  let villagestate;
  let turns1 = 0;
  let turns2 = 0;
  for (let numTest = 0; numTest < 100; numTest++) {
    villagestate = VillageState.random();
    turns1 += runSilentRobot(villagestate, robot1, memory1);
    turns2 += runSilentRobot(villagestate, robot2, memory2);
  }
  console.log(`Robot #1 average: ${turns1 / 100} turns`);
  console.log(`Robot #2 average: ${turns2 / 100} turns`);
}

// compareRobots(routeRobot, [], goalOrientedRobot, []);
