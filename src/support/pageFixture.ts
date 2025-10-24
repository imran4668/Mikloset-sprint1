import { CustomWorld } from "./world";

let currentWorld:CustomWorld;

export const setWorld = (world:CustomWorld) => {
    currentWorld = world;
}
export const getWorld = () => currentWorld;