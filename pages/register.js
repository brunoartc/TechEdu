exports.register = function(prop) {
  organizationsl=[]
  for (i in prop){
    organizationsl.push("<option value= " + i +  ">" + i + "</option>")
  }
  return (`
        <select name="org" class="orginput">
        <option selected="selected" value="none">Selecione uma</option>
        `+ organizationsl +`
        </select>
        `)
}
