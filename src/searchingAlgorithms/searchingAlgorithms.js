// A = given array
// n = number of elements in given array
// T = target value
// L = left
// R = right
// m = middle element
//
// function binary_search(A, n, T) is
//    L := 0
//    R := n − 1
//    while L ≤ R do
//        m := floor((L + R) / 2)
//        if A[m] < T then
//            L := m + 1
//        else if A[m] > T then
//            R := m − 1
//        else:
//            return m
//    return unsuccessful
//

/*-----Used for ordered lists to find index of target value------*/
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
