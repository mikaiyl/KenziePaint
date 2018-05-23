Bitmap.prototype.fill = function(row, col, new_color) {
    const old_color = this.grid[row][col];
    if(old_color === new_color) return 42;
    this.setColor(row, col, new_color);

    let offset = 1;
    let queue = [];
    // The rest of the flood fill algorithm is given in pseudo-code below.
    // Convert the following pseudo-code comments into javascript
    // to complete the implementation of this method.
    //
    //
    // Push the coordinates [row, col] onto the queue.
    queue.push( [row, col] );
    // While the queue is not empty:
    while ( queue.length > 0 ) {
    //    Shift a pair of coordinates [r,c] off the front of the queue.
        let [c_row, c_col] = queue.shift();
    //    The 4-connected neighbors are the cells above, below, left, and right.
        for ( let [d_row, d_col] of [
            [Number(c_row) + offset , c_col],
            [c_row, Number(c_col) + offset],
            [Number(c_row) - offset, c_col],
            [c_row, Number(c_col) - offset] ] ) {
    //    Make sure you dont go off the board
            if ( d_row >= 0 && d_row < this.grid.length && d_col >= 0 && d_col < this.grid[0].length ) {
    //    Check each of those 4 neighbors:
    //       If the neighbor is old_color:
                if ( this.grid[d_row][d_col] === old_color ) {
        //          Set the neighbor to new_color.
                    this.setColor(d_row, d_col, new_color);
        //          Add the neighbors coordinates to the queue
        //          (to ensure we later check its neighbors as well).
                    queue.push( [d_row, d_col] );
                }
            }
        }
    }
}