const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if(Array.isArray(members))
{
  let letter = [];
for(i=0;i<members.length;i++)
{
let q = 0;
if(typeof members[i] == 'string' && members[i]!==' ')
splited = members[i].split('');
if(typeof splited[0] == 'string' && splited[0]!==' ')
letter.push(splited[0].toUpperCase());
else
for(j=0;j<splited.length;j++){
if(splited[j]!==' ' && !q>0)
letter.push(splited[j].toUpperCase());
q++;
}
}
letter.sort();
result = letter.join('');
return result;
}
else
return false;
};
