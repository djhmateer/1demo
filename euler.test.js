import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { sumMultiples } from './euler.js';

test('example from problem: multiples of 3 or 5 below 10 sum to 23', () => {
  assert.equal(sumMultiples(10), 23);
});

test('answer: multiples of 3 or 5 below 1000 sum to 233168', () => {
  assert.equal(sumMultiples(1000), 233168);
});

test('limit of 1 returns 0 — no multiples exist below 1', () => {
  assert.equal(sumMultiples(1), 0);
});

test('limit of 3 returns 0 — 3 is not below 3', () => {
  assert.equal(sumMultiples(3), 0);
});

test('limit of 4 returns 3 — only 3 qualifies', () => {
  assert.equal(sumMultiples(4), 3);
});

test('multiples of both 3 and 5 (like 15) are only counted once', () => {
  // below 16: 3,5,6,9,10,12,15 = 60
  assert.equal(sumMultiples(16), 60);
});

test('limit of 0 returns 0', () => {
  assert.equal(sumMultiples(0), 0);
});

test('negative limit returns 0', () => {
  assert.equal(sumMultiples(-10), 0);
});

test('float limit behaves like its floor', () => {
  assert.equal(sumMultiples(10.9), sumMultiples(10));
});

test('NaN limit returns 0', () => {
  assert.equal(sumMultiples(NaN), 0);
});

test('string limit returns 0', () => {
  assert.equal(sumMultiples('hello'), 0);
});
