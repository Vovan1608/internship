const sortFunc = (a, b) => a.match(/\d/) - b.match(/\d/);

const sortString = str => str.split(' ').sort(sortFunc).join(' ');