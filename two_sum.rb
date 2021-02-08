# Given an array of integers, find a pair of integers that sums to a number X.

# For e.g, if A = [6,3,5,2,1,7]. X = 4, Result= [3,1]
require "pry"

# def two_sum(arr, target)
#   results_hash = {}
#   arr.each do |i|
#     result = target - i
#     return [i, result] if results_hash[i]
#     results_hash[result] = true
#   end
#   return nil
# end

def two_sum(arr, target)
  return nil if !arr
  hash = {}
  arr.each do |i|
    result = target - i
    return result, i if hash[i]
    hash[result] = true
  end
  return nil
end

puts two_sum([6, 3, 5, 2, 1, 7], 4)
#[3,1]
puts two_sum([], 4)
#nil
puts two_sum([6, 3, 5, 2, 1, 7], 499)
#nil
puts two_sum(nil, 499)
#nil
