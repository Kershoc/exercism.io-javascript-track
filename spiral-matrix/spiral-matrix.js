export class SpiralMatrix {
  static ofSize(size) {
    let matrix = [...new Array(size)].map(() => new Array(size));
    let count = 0, dir = 1, top = 0, bottom = size - 1, left = 0, right = size - 1;

    while (top <= bottom && left <= right) {
      switch (dir) {
        case 1: // moving left->right
          for (let i = left; i <= right; ++i) {
            matrix[top][i] = ++count;
          }
          ++top;
          dir = 2;
          break;
        case 2: // moving top->bottom
          for (let i = top; i <= bottom; ++i) {
            matrix[i][right] = ++count;
          }
          --right;
          dir = 3;
          break;
        case 3: // moving right->left
          for (let i = right; i >= left; --i) {
            matrix[bottom][i] = ++count;
          }
          --bottom;
          dir = 4;
          break;
        case 4: // moving bottom->up
          for (let i = bottom; i >= top; --i) {
            matrix[i][left] = ++count;
          }
          ++left;
          dir = 1;
          break;
      }
    }
    return matrix;
  }
}
