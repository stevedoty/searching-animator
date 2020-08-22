
/*-----SEQUENTIAL SEARCH------*/






/*-----ORDERED LISTS SEARCH------*/






/*-----BINARY SEARCH------*/
export function binarySearch(A, n, T) {
  let L = 0;
  let R = n-1;
  while(L <= R){
    let m = Math.floor((L + R) /2);
    if(A[m] < T){
      L = m + 1;
    }else if(A[m] > T){
      R = m - 1;
    }else{
      return m
    }
  }
}


/*----- INSERTIONA INTO AN ORDRED LIST------*/
