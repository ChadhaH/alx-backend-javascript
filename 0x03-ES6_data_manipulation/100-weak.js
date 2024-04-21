export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let calld = 0;
  if (weakMap.get(endpoint)) calld = weakMap.get(endpoint);
  weakMap.set(endpoint, calld + 1);
  if (calld + 1 >= 5) throw new Error('Endpoint load is high');
}
