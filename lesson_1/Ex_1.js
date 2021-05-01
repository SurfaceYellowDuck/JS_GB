"use strict";
var userInput = parseFloat(prompt('Введите температуру в градусах Цельсия'));
var farTemperature = (9 / 5) * userInput + 32;
alert(`Температура в градусах по фаренгейту: ${farTemperature}`);
