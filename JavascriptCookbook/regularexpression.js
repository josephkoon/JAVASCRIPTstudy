//RegExp Literal
var re = /regular expression/;
var re = /Shelley\s+Powers/;

^ match beginning of input /^This/ matches"This is..."
$ matches end of input /end?/ matches"This is the end"
* matches zero or more times /se*/ matches "seeee" as well as "se"
? matches zero or one time /ap?/matches "apple" and "and"
+ matches one or more times /ap+/ matches "apple" but not "and"
{n} matches exactly n times /ap{2}/ matches "apple" but not "aple"
{n,} matches n or more times /ap{2,}/ matches all p's in "apple" and "appple" but not "aple"
{n,m} matches at least n, at most m times /ap{2,4}/ matches four p's in "appppppple"
. any character except newline /a.e/ matches "ape" and "axe"
[...] any character within brackets /a[px]e/ matches "ape" and "axe" but not "ale"
[^...] any character but those within brackets /a[^px]/ matches "ale" but not "axe" or "ape"
\b matches on word bundary /\bno/ matches the first "no" in "nono"
\b matches on nonword boundary
\d digits from 0 to 9
\D any nondigit character
\w matches word character (letters, digits, underscores)
\W matches any nonword character (not letters, digits or underscores)
\n matches a line feed
\s a single whitespace character
\S a single character that is not whitespace
\t a tab
(x) parantheses

//testing if a substring exists TEST
var cookBookString = ["Joe's Cooking Book", "Sam's Cookbook", "Javascript Cookbook", "Javascript BookCook"]
var pattern = /Cook.*Book/;
for (var i=0; i<cookBookString.length; i++){
	alert(cookBookString[i] + " " + pattern.test(cookBookString[i])) //test if substring exists in it
}

