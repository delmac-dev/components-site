import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export type tileProps = {
  xPos?: number,
  yPos?: number,
  occupied?: boolean
}

export type elementProps = {
  center?: boolean,
  xPos: number,
  yPos: number,
  xSpan: null | string,
  ySpan: null | string,
  offset: null | string,
  position: "relative" | "absolute"
}
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createTiles(columns:number, rows:number) {
  if (!rows || !columns) return [];

  const tiles: tileProps[] = [];
  var activeRow = 0, activeColumn = 0;

  Array.from(Array(rows * columns)).map(() => {
      const tile: tileProps = {}
      tile["xPos"] = activeColumn + 1;
      tile["yPos"] = activeRow + 1;
      tile["occupied"] = false;

      if((activeColumn + 1) % columns === 0) {
          activeRow += 1;
          activeColumn = 0;
      }else {
          activeColumn += 1;
      }

      tiles.push(tile);
  });

  return tiles;
};

export const updateTiles = (tiles: tileProps[], xPos: number, yPos: number) => {
  const updatedTiles = tiles.map((tile) => {
    if (tile.xPos === xPos && tile.yPos === yPos) {
      return { ...tile, occupied: true };
    }
    return tile;
  });

  return updatedTiles;
};

export const convertStr = (inputString: string) => {  
  // Split the input string by '/' to get an array of strings
  const stringArray = inputString.split('/');

  // Convert each string to a number using map
  const numberArray = stringArray.map((str: string) => parseInt(str, 10));

  return numberArray;
};

