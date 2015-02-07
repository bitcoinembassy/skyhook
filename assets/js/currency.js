var Currency = (function () {
  var initCalled = false;

  var code;
  var symbol; 
  var denominations = [];

  return {
    init : function(data) {
      code = data.code;
      symbol = data.symbol;
      denominations = data.denominations;

      initCalled = true;
    },
 
    format : function(amount) {
      if (!initCalled) {
        throw "Must call Currency.init() first";
      }

      amount = parseFloat(amount); 
      if (isNaN(amount)) {
        return "...";
      }
      return symbol + amount.toFixed(2);
    },

    largestDenomination : function() {
      return parseInt(denominations[denominations.length-1]);
    },
  
    smallestDenomination : function() {
      return parseInt(denominations[0]);
    } 
  };
})();
