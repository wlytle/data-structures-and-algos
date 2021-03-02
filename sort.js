function merge(a, start, mid, end) {
  let i = start,
    j = mid + 1,
    k = 0,
    result = [];
  while (i <= mid && j <= end) {
    a[i] <= a[j] ? (result[k++] = a[i++]) : (result[k++] = a[j++]);
  }

  while (i <= mid) {
    result[k++] = a[i++];
  }

  while (j <= end) {
    result[k++] = a[j++];
  }

  for (let m = 0; m < result.length; m++) {
    a[start + m] = result[m];
  }
}

function divide(a, start, end) {
  if (start >= end) return;
  let mid = Math.floor(start + (end - start) / 2);
  divide(a, start, mid);
  divide(a, mid + 1, end);
  merge(a, start, mid, end);
}

function mergeSort(a) {
  if (!a?.length) return null;
  divide(a, 0, a.length - 1);
  return a;
}

// console.log(mergeSort([4, 2, 6, 1, 9, 12, 99, 0]));
// console.log(mergeSort([4, 3, 2, 1]));
// console.log(mergeSort([1, 2, 3, 4]));
// console.log(mergeSort([1]));

function swap(a, curr, update) {
  let temp;
  temp = a[curr];
  a[curr] = a[update];
  a[update] = temp;
}

function dnf(a, start, end, pivotIdx) {
  let left = start - 1,
    right = end + 1,
    mid = start - 1,
    pivot = a[pivotIdx];
  while (mid + 1 < right) {
    if (a[mid + 1] < pivot) {
      swap(a, mid + 1, left + 1);
      left++;
      mid++;
    } else if (a[mid + 1] > pivot) {
      swap(a, mid + 1, right - 1);
      right--;
    } else {
      mid++;
    }
  }
  return [left, right];
}

function sort(a, start, end) {
  if (start < 0 || end >= a.length || start >= end) return;
  let edge = [];
  pivot = start + Math.floor(Math.random() * (end - start + 1));
  edge = dnf(a, start, end, pivot);
  sort(a, start, edge[0]);
  sort(a, edge[1], end);
}

function quickSort(a) {
  if (!a?.length) return null;
  sort(a, 0, a.length - 1);
  return a;
}

// a = [3, 3, 9, 1, 5, 6, 1, 2, 10];

// console.log(dnf(a, 0, a.length - 1, 4));

console.log(quickSort([4, 2, 6, 1, 9, 12, 99, 0]));
console.log(quickSort([4, 3, 2, 1]));
console.log(quickSort([1, 2, 3, 4]));
console.log(quickSort([1]));
