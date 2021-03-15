
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  if (matrix.length !== 0) {
    return (matrix.reduce((acc, cur, i) => {return acc.concat((!(i % 2) ? cur : cur.reverse()));
       }, []))
  } else {
    return [];
  }

};
