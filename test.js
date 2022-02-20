var normal="abcdefghijklmnopqrstuvwxyz?.<>"
var changed="αв¢đєƒgнιĵкĻмησρqяѕтυνωχуz?●«»"


function change(_in, _out)
{
  var s="";
  var n=_in.toLowerCase();

  ///if (_in.value.length=="0") _arab.value="";
  
  for(i=0; i<n.length; i++)
  {
    var c=n.charAt(i);
    for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
        if (j<normal.length) { 
            s+=changed.charAt(j);} 
        else {
            s+=c;
    }
  }

  return _out=s;

}
console.log(change('Rkibul islam'))

function focusFirst() {

  if (els = oTD.getElementsByTagName("input")) {
    els[0].focus();
  }
}

function highlight(field) {
field.focus();
  field.select();
}