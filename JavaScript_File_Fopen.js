
/* Opening, Reading and Writing data into a File in JavaScript */
/* The JavaScript fopen function takes two parameters */
/* 1.Path (getScriptPath()) */
/* 2.Mode(0 for reading and 3 for writing). */
/* The fopen() function returns -1, if the file is successfully opened. */
/* Written by Vakindu Philliam */

/READING FROM A FILE IN JAVASCRIPT

//Opening and reading a file in JavaScript
//Example of Read file

file=fopen(getScriptPath(),0);

//The function fread() is used for reading the file content

//Example fread

str=fread(file,flength(file));


//WRITING TO A FILE IN JAVASCRIPT

//The fwrite function is used to write contents to the file

//Example of fwrite

file=fopen("c:\MyFile.txt",3);  

//The above function opens the file for writing

fwrite(file,str); 

//The str variable is the content that is to be written into the file


//CLOSING THE FILE

//The fclose() function is used to Close the file you opened

fclose(file);

