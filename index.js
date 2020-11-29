// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  const newDriverList = [...drivers, name];
  return newDriverList;
}

function prependDriver(name) {
  const newDriverList2 = [name, ...drivers];
  return newDriverList2;
}

function removeLastDriver(name) {
  const removeDriver = drivers.slice(0, drivers.length - 1);
  return removeDriver;
}

function removeFirstDriver(name) {
  const removeDriver1 = drivers.slice(1);
  return removeDriver1;
}
