import test from 'node:test';
import assert from 'node:assert/strict';
import {closestSegmentPoints} from '../src/measure-math.js';
const near=(x,y)=>assert.ok(Math.abs(x-y)<1e-9,`${x} != ${y}`);
test('two parallel finite lines',()=>near(closestSegmentPoints([0,0,0],[5,0,0],[0,2,0],[5,2,0]).distance,2));
test('two crossing line segments',()=>near(closestSegmentPoints([-2,0,0],[2,0,0],[0,-2,0],[0,2,0]).distance,0));
test('two skew segments',()=>near(closestSegmentPoints([0,0,0],[5,0,0],[2,2,4],[2,2,6]).distance,Math.sqrt(20)));
test('two separated endpoints',()=>near(closestSegmentPoints([0,0,0],[1,0,0],[3,4,0],[4,4,0]).distance,Math.sqrt(20)));
test('one point degenerate',()=>near(closestSegmentPoints([0,0,0],[0,0,0],[1,0,0],[5,0,0]).distance,1));
