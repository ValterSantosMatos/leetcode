const resourcesMap: Map<number, number[] | "404"> = new Map([
  [1, [2]],
  [2, []],
  [3, [4]],
  [4, [5, 6]],
  [5, []],
  [6, []],
  [7, [100]],
  [8, [9]],
  [9, [101]],
  [10, [11, 12]],
  [11, []],
  [12, [10]],
]);
resourcesMap.set(100, "404");
resourcesMap.set(101, "404");

/**
 * Why queue instead of recursion
 */
export function fetch_bundle(resourceId: number): {
  bundle: number[];
  not_available: number[];
} {
  let visitedResources: { bundle: number[]; not_available: number[] } = {
    bundle: [],
    not_available: [],
  };
  let nextResources = [resourceId];

  while (nextResources.length) {
    var nextApiCall = nextResources[0];
    nextResources.splice(0, 1);

    // Nothing else to get
    if (!nextApiCall) {
      break;
    }

    // Check if we already visit this resource
    if (visitedResources.bundle.indexOf(nextApiCall) > -1) {
      continue;
    }

    // Call the api and parse the response
    const response = resourcesMap.get(nextApiCall);
    if (response === "404" || response === undefined) {
      visitedResources.not_available.push(nextApiCall);
    } else {
      nextResources.push(...response);
      visitedResources.bundle.push(nextApiCall);
    }
  }

  return visitedResources;
}
