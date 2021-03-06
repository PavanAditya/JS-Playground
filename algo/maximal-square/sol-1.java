class Solution {
     public int maximalSquare(char[][] matrix) {
        
        int maxSquare = 0;
        
        for(int i = 0; i < matrix.length; i++){
            for(int j = 0; j < matrix[0].length; j++){
                if(matrix[i][j] == '1')
                    maxSquare = Math.max(maxSquare, findArea(matrix, i, j));
            }
        }
        return maxSquare;
    }
    
    public int findArea(char[][] matrix, int i, int j){
        
        int dim = 1;
        while(i+dim < matrix.length || j+dim < matrix[0].length){
            for(int l = 0; l <= dim; l++){
                if(i+l >= matrix.length || j+dim >= matrix[0].length || matrix[i+l][j+dim] == '0')
                    return dim*dim;
            }
            for(int w = 0; w < dim; w++){
                if(i+dim >= matrix.length || j+w >= matrix[0].length || matrix[i+dim][j+w] == '0')
                    return dim*dim;
            }
            dim++;
        }
        return dim*dim;
    }
}