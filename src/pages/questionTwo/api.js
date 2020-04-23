import axios from "axios";

    function getCardDetails() {
	  return new Promise((resolve, reject) => {
	    axios.get('http://localhost:3001/example').then((result) => {
	    	resolve(result);  /* Return promise object with value */
	    })
	    .catch((error) => {
	    	resolve();
	    });

	  });
    }

export { getCardDetails }