tsfilename="$1"
tsc "$tsfilename"

clear

jsfilename="${tsfilename::-3}.js"
node "$jsfilename"

rm "$jsfilename"