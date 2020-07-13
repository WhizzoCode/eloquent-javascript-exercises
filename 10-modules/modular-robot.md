# A modular robot

These are the bindings that the project from Chapter 7 creates:

- roads
- buildGraph
- roadGraph
- VillageState
- runRobot
- randomPick
- randomRobot
- mailRoute
- routeRobot
- findRoute
- goalOrientedRobot

If you were to write that project as a modular program, what modules would you create? Which module would depend on which other module, and what would their interfaces look like?

Which pieces are likely to be available prewritten on NPM? Would you prefer to use an NPM package or write them yourself?

---

main:
    - Imports:
        - graph.buildGraph
        - village.VillageState
        - village.runRobot
        - robots.randomRobot
        - robots.routeRobot
        - robots.goalOrientedRobot
    - roads
    - roadGraph

graph:
    - buildGraph
(or dijkstrajs on NPM)

village:
    - VillageState (export)
    - runRobot (export)
    - randomPick (export)

robots:
    - Imports:
        - village.randomPick
    - mailRoute
    - findRoute
    - randomRobot (export)
    - routeRobot (export)
    - goalOrientedRobot (export)
