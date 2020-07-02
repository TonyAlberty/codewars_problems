function DNAStrand(dna){
    var complimentMap = {
      "A":"T",
      "T":"A",
      "C":"G",
      "G":"C"
    };
    var complimentStrand = '';
    for(char in dna){
      complimentStrand += complimentMap[dna[char]];
    }
    return complimentStrand;
}