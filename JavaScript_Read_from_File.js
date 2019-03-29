
/* The JavaScript fopen function takes two parameters */
/* 1.Path (getScriptPath()) */
/* 2.Mode(0 for reading and 3 for writing). */
/* The fopen() function returns -1, if the file is successfully opened. */
/* This particular function opens a file, reads through and iterates through its contents. */
/* Written by Vakindu Philliam */

//Open the file using the fopen()function

file=fopen("c:\MyFile.txt",0);

//Use the fread() function to read through the file's content

str=fread(file,flength(file));

//Partition file contents

var contents = str.split(/\s/);

//Close the opened file

fclose(file);

//Iterate through the captured file contents

$.each(contents,function(item){

//Printout each element in the document
		
document.write(contents[item]+"<p>");

});
