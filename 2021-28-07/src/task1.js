import { sortFunc } from './helpers.js';

const sortString = str => str.split(' ').sort(sortFunc).join(' ');