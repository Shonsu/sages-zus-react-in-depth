export const updateItem = <T extends { id: any; }>(x: T) => (xs: T[]): T[] => xs.map((p) => (p.id === x.id ? x : p));
export const appendItem = <T>(x: T) => (xs: T[]): T[] => [...xs, x];
