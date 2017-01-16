# SISLottery
<h2>Tooling</h2>

.net core and Angular 2
I have used Angular 2 as it offers much better scalability than Angular 1 with concepts like Components and the use of TypeScript.
I chose .net core because, in the era of cloud computing and technologies like Docker, being portable and having lightweight runtimes is important. 
essential.

<h2>Running</h2>
I am using 1.00 preview2 of .net core. 
The app should work on the latest version, but here is the download link to preview 2 just in case:
https://github.com/dotnet/core/blob/master/release-notes/download-archives/1.0.1-preview2-download.md

After cloning, the quickest way to run the app is to navigate to <RepoRoot>/SISLottery and type dotnet run in a command line.
This will start Kestrel and you can use the app by navigating to localhost:5000 in your browser.

You can open and run this app if you have Visual Studio 2015 Update 3 with typescript 2 installed. 
Otherwise, there is some significant config involved to get the typescript part of the app to build. 

<h2>Using the app</h2>

<h3>Create Draw</h3>
The initial screen will let you enter a new draw as specified. 

Please only type in dd/mm/yyyy date formats as there is no format validation.  

Please note that if your language is setup as English(US) on Windows, then you will have to type in a 
US Style mm/dd/yyyy date.

<h3>Search by date</h3>
Draws for 09/10/2015 are preloaded in memory and ready to search on top of whatever draws you create.

<h3>Entering results</h3>
Clicking on the draw title in the results will take you to the screen to enter primary and secondary results.

There is a basic JSON representation of the draw and it's result rules at the top of the page.

If you enter invalid results, then a JSON representation of the validation errors will show at the bottom of the page in red. 

<h3>Logging</h3>
The basic console logger has been enabled and you should see it's output.
THere is also a class called ErrorLoggingMiddleware that plugs itself into the http pipeline to act as a global error logger.
I believe this is better than littering code with try catch blocks where I do nothing with the error apart from log it.
I would use a try catch in the event I had to roll back a database transaction or similar. 

<h3>Testing</h3>
 Navigate to <RepoRoot>/SISLottery.Tests and run dotnet test
 I have done 3 tests on the validation behaviour of the Lottery draw. 





