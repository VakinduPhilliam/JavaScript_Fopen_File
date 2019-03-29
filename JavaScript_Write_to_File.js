
/* The JavaScript fopen function takes two parameters */
/* 1.Path (getScriptPath()) */
/* 2.Mode(0 for reading and 3 for writing). */
/* The fopen() function returns -1, if the file is successfully opened. */
/* This particular code sorts the elements of an array in ascending order, then it opens a text file and writes the sorted elements into the file. */
/* Written by Vakindu Philliam */

		
//FUNCTION TO SORT THE ELEMENTS OF AN ARRAY IN ASCENDING ORDER

var m = function sortList(list) {

//Return array if one element or none

	if (list.length <= 1) { 
	
		return list;
	
	} else {

		var left = [];
		var right = [];
		var pivot = list.pop();
		var length = list.length;
    var Array = [];

		for (var i = 0; i < length; i++) {

			if (list[i] <= pivot) {
	
				left.push(list[i]);
	
			} else {
	
				right.push(list[i]);
	
			}
	
		}

		return Array.concat(sortList(left), pivot, sortList(right));
	}
}

var array = [33, 70, 52, 25, -11, 41, 12 ];

//WRITING THE SORTED ARRAY INTO THE TEXT FILE

//Capture the results of the sorting into variable str

var str = m(array);

//Open the text file for writing

file=fopen("c:\MyFile.txt",3);  

//Write the contents to the file

fwrite(file,str);


//Close the opened file

fclose(file);
