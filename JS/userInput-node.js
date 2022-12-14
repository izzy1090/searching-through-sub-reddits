// declare a variable to export out to other scripts
let searchTerm;
let sortFilter = "hot";
let threadLimit = 0;

// need to write userInput function accepts user search term
// input: search term, thread limit, and sort category
// output: initializes global variables with passed-in args 
function userInput(search, limit, sort) {
    try {
        // if search and threadLimit are found and sort is missing
        if (search && threadLimit > 25 || threadLimit < 100 && !sort) {
            // initialize global variables to match user input
            searchTerm = search
            threadLimit = limit
        } 
        // if search, threadLimit and sort are all found 
        else if (search && threadLimit > 25 || threadLimit < 100 && sort.match(/['relevance','hot','new','comments', 'top']/)) {
            // initialize all variables to passed-in args
            console.log(`Sorting threads by ${sort}... Thread count caps at 100.`)
            searchTerm = search
            threadLimit = limit
            sortFilter = sort } 
        // if thread count is greater than 100 or sort doesn't match log error message
        else if (threadLimit > 100 || !sort.match(['relevance','hot','new','comments', 'old'])) {
            console.log("Bad search request, your results won't be accurate.") 
        }
    } 
    // else return an error
    catch (err){
        console.log(err)
    }    
}

// for sort pick one of (relevance, hot, top, new, comments, old)
    // at this time date ranges are not possible via Reddit's API
userInput('CryptoStock', 100, 'hot')

module.exports = {
    searchTerm,
    threadLimit, 
    sortFilter,
    userInput
}