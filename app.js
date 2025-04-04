let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io']; 

pronoun.forEach(function(p) {
  adj.forEach(function(a) {
    noun.forEach(function(n) {
      extensions.forEach(function(ext) {
        console.log(p + a + n + ext);
      });
    });
  });
});