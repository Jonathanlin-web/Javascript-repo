//take in a string and reverse a string
    function reverseString(str)
    {
        let revStringResult = "";
        
        for(var i = str.length -1; i >= 0; i--)
        {
            //reverse the string
 //           revStringResult = revStringResult.concat(str[i]);
            revStringResult = revStringResult + str[i];
        }
        return revStringResult;
    }

    console.log(reverseString("reverse"));