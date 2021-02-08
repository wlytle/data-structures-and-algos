# Given a string s, return the longest palindromic substring in s.

# Example 1:

# Input: s = "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"
# Example 3:

# Input: s = "a"
# Output: "a"
# Example 4:

# Input: s = "ac"
# Output: "a"

# Constraints:

# 1 <= s.length <= 1000
# s consist of only digits and English letters (lower-case and/or upper-case),
require "pry"

def longest_palindromic_substr(s)

  #Brute force: itterate throguh string collecting elements (how? array? string?) and looking backward to see if it is a palidnrome

  # b a b a d
  # d a b a b

  # find all substrs and see which are palindormes then take largeest

  # b ba bab baba babad a ab aba abad b ba bad a ad d => All sbstrs
  # *     *             *     *       *        *    * => All palindormes
  #       ^                   ^                       => longest palidnormes
  # nonon r a c e c a r
  # boob

  #Nestered interation to find all substrs

  # set inititial palindrome
  pal = s[0]
  return s if s.length == pal

  for i in (0..s.length - 1)
    substr = ""
    for j in (i..s.length - 1)
      substr += s[j]
      # check if substr is palindrome

      sl = substr.length
      if s[j] == substr[0] #&& sl % 2 != 0
        k = 0
        # itterate through substr it see if it's a palindrome
        while k <= sl / 2
          #return if not plaindrome
          k = sl + 2 if substr[k] != substr[sl - (k + 1)]
          # if sbustr is a plaindrome and it is the longest so far save it
          #binding.pry
          pal = substr if k == sl / 2 && sl > pal.length
          k += 1
        end
      end
    end
  end
  pal
end

puts longest_palindromic_substr("babad")
puts longest_palindromic_substr("cbbd")
puts longest_palindromic_substr("a")
puts longest_palindromic_substr("ac")
puts longest_palindromic_substr("lphbehiapswjudnbcossedgioawodnwdruaaxhbkwrxyzaxygmnjgwysafuqbmtzwdkihbwkrjefrsgjbrycembzzlwhxneiijgzidhngbmxwkhphoctpilgooitqbpjxhwrekiqupmlcvawaiposqttsdgzcsjqrmlgyvkkipfigttahljdhtksrozehkzgshekeaxezrswvtinyouomqybqsrtegwwqhqivgnyehpzrhgzckpnnpvajqevbzeksvbezoqygjtdouecnhpjibmsgmcqcgxwzlzztdneahixxhwwuehfsiqghgeunpxgvavqbqrelnvhnnyqnjqfysfltclzeoaletjfzskzvcdwhlbmwbdkxnyqappjzwlowslwcbbmcxoiqkjaqqwvkybimebapkorhfdzntodhpbhgmsspgkbetmgkqlolsltpulgsmyapgjeswazvhxedqsypejwuzlvegtusjcsoenrcmypexkjxyduohlvkhwbrtzjnarusbouwamazzejhnetfqbidalfomecehfmzqkhndpkxinzkpxvhwargbwvaeqbzdhxzmmeeozxxtzpylohvdwoqocvutcelgdsnmubyeeeufdaoznxpvdiwnkjliqtgcmvhilndcdelpnilszzerdcuokyhcxjuedjielvngarsgxkemvhlzuprywlypxeezaxoqfges")
