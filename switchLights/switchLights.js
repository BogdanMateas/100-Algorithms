function switchLights(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      a = swapLights(a, i);
    }
  }

  return a;
}

function swapLights(lights, currentIndex) {
  for (let i = 0; i < currentIndex + 1; i++) {
    lights[i] = lights[i] === 1 ? 0 : 1;
  }

  return lights;
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
