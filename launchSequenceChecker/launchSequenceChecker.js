function launchSequenceChecker(systemNames, stepNumbers) {
  const lauchCodes = {};

  for (let i = 0; i < systemNames.length; i++) {
    if (lauchCodes.hasOwnProperty(systemNames[i])) {
      if (lauchCodes[systemNames[i]] >= stepNumbers[i]) {
        return false;
      }
      lauchCodes[systemNames[i]] = stepNumbers[i];
    } else {
      lauchCodes[systemNames[i]] = stepNumbers[i];
    }
  }

  return true;
}

console.log(
  launchSequenceChecker(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 3, 11, 111]
  )
);
console.log(
  launchSequenceChecker(
    ["stage_1", "stage_1", "stage_2", "dragon"],
    [2, 1, 12, 111]
  )
);
