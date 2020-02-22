module.exports = function towelSort(matrix) {
    if(!matrix || !matrix.length ) return []
    else {
        let flattenedarr=[]
        for(let i=0; i<matrix.length; i++){
            (i+1)%2=="0" ? flattenedarr.push(matrix[i].reverse()) : flattenedarr.push(matrix[i])   
        }
        return flattenedarr.flat()
    }
}
