import {
  length as rLength,
  keys,
  compose,
  invoker,
} from 'ramda';
import iOrR from './iOrR';

const mapSize = invoker(0, 'size');

const size = map => iOrR(mapSize, compose(rLength, keys), map);

export default size;
