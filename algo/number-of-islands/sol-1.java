class Solution {
    public int numIslands(char[][] grid) {
        if(grid == null || grid.length == 0 || grid[0].length == 0)
            return 0;
        else{
            int R = grid.length;
            int C = grid[0].length;
            int count = 0;
            
            for(int i = 0; i < R; i++){
                for(int j = 0; j < C; j++){
                    if(grid[i][j] == '1'){
                        DFS(grid, i, j, R, C);
                        ++count;
                    }
                        
                }
            }
            
            return count;
        }
    }
    private void DFS(char[][] grid, int x, int y, int R, int C){
        if(x >= 0 && x < R && y >= 0 && y < C && grid[x][y] == '1'){
            grid[x][y] = '2';
            DFS(grid, x + 1, y, R, C);
            DFS(grid, x - 1, y, R, C);
            DFS(grid, x, y + 1, R, C);
            DFS(grid, x, y - 1, R, C);
        }
    }
}