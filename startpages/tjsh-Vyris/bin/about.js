/*
* Prints about info
* Author : Vereis~
*/


function about(args)
{
	var helpDesc = ["This function prints out some standard about information. This function takes no arguments"];
	
    if (args[0] == "--help" || args[0] == "-h")
	{
		print(printHelp(helpDesc));
	}
	else
	{
		print("Testing information");
		print("More testing information More testing information More testing information ");
		print(tab + "Hobbies and Interests:");
		print(tab + tab + "- xyz");
		print(tab + tab + "- yza");
	}
    respond();
}
