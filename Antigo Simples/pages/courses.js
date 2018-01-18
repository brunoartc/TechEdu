exports.main = function(prop) {
  organizationsl=[]
  for (i in prop){
    organizationsl.push("<option value= " + i +  ">" + i + "</option>")
  }
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <link rel="stylesheet" href="/static/css/courses_inside.css">
        <div>
          <div class="video">
            + <iframe src=" `+ prop.url +`" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <div class="course_info">
            <span>`+ prop.info  +`</span>
          </div>
        </div>
      </body>
    </html>

        `)
}
