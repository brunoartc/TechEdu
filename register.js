exports.register = function(prop) {
  organizationsl=[]
  for (i in prop.firebase){
    organizationsl.push("<option value=" + i +  ">" + i + "</option>")
  }
  return (`
    <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>TechEdu Registro</title>
    </head>
    <body>
      <h1> ola </h1>
      <form class="" action="registers" method="post">
        <br><span>Organizacao:</span><select class="" name="organization" id="organization">
        <option selected="selected" value="none">Selecione uma</option>
        `+ organizationsl +`
        </select>
        <br><span>Usuario:</span><input type="text" id="user" name="user" value="" onkeyup="login1();">
        <br><span>Senha:</span><input type="password" id="pass" name="pass" value="" onkeyup="login1();">
        <span id="teste"></span>
        <br><button type="submit" name="Registro">Registrar-se</button>
        <br><button type="button" name="Fire" onclick="FirePost()">FirePost</button>
      </form>
    </body>
  </html>`)}
