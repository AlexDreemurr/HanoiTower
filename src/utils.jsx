export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

// Get hanoi steps, return a list of step objects
export function hanoi(n) {
  const stepList = [
    // generate initial discs like [3, 2, 1]
    {
      A: range(1, n + 1).sort((a, b) => b - a),
      B: [],
      C: [],
    },
  ];
  // move behavior
  function move(data, column1, column2) {
    /* 
      Function move:
      column1: 'A', column2: 'C'
      data: 
        {
          A: [3, 2, 1],
          B: [],
          C: []
        }
      return: 
        {
          A: [3, 2],
          B: [],
          C: [1],
        }
    */
    // DEEP COPY IS NEEDED!
    const res = {
      A: [...data.A],
      B: [...data.B],
      C: [...data.C],
    };
    const disc = res[column1].pop();
    res[column2].push(disc);
    return res;
  }
  // Hanoi Recursion to generate moving steps
  function doHanoi(n, a, b, c) {
    if (n == 1) {
      stepList.push(move(stepList[stepList.length - 1], a, c));
    } else {
      doHanoi(n - 1, a, c, b);
      doHanoi(1, a, b, c);
      doHanoi(n - 1, b, a, c);
    }
  }
  doHanoi(n, "A", "B", "C");
  return stepList;
}
