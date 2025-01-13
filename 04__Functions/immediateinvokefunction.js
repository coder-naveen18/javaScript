// Immediately Invoked Function Expression (IIFE)

(function chai(){ // named IIFE
    console.log(`DB Connected`);
})();


// (create function)(call);

// Why we use IIFE ?
// Some times global scope's variable pollution gives a problem , so to reduce that pollution we use the IIFE
// always use ; to stop the function when we use multiple iife 


(()=>{ // Simple IIFE or UnNamed IIFE
    console.log(`DB connected`)
})();



((name)=>{
    console.log(`DB connected ${name}`)
})("Naveen");