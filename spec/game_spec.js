const mocha = require('mocha');
const expect = require('chai').expect;
const Game = require('../src/game');
var assert = require('chai').assert;


describe ("Game", function() {
  var game
});

beforeEach(function() {
  game = new Game();
});

it('welcomes the player to a new game of Battleship', function() {
  assert.equal(game.welcome(), "Welcome to this game of Battleship!")
});
