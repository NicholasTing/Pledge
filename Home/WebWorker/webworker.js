
self.onmessage = function (e) {
     rcvdMessage = e.data;

     self.postMessage("The fibonnaci number of " + e.data + " is " +
                        fibonacci(rcvdMessage));

};

var fibonacci = function(n){
    if(n-1 ==0 || n-2 == 0){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
};
