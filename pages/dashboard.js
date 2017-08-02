exports.main = function (prop) {
  console.log(Object.keys(prop) + "prop= " + prop.courses);
  function coursesFormater(prop) {
    var coursesformated = []
    for (i in prop.courses){
      coursesformated.push(`
      <div id="box">
          <a href="curso?curso=`+ i +`">
          <img src="/static/images/` + i + `.jpg" alt=` + i + ` id="box_img">
          <span>` + i + `</span>
          </a>
      </div>`)
    }
    console.log(coursesformated + " format");
    return (coursesformated)
  }


  return (`
    <!DOCTYPE HTML>
    <html>
    	<head>
    	<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<title>TechEdu&#174; Inovação em educação para jovens</title>
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    	<meta name="description" content="Eduçação inovadora para jovens do ensino médio" />
    	<meta name="keywords" content="educação, programação, tecnologia, empreendedorismo, eletrônica, jovens, grandes empresas, ensino médio" />
    	<meta name="author" content="tech.edu.br" />

      	<!-- Facebook and Twitter integration -->
    	<meta property="og:title" content=""/>
    	<meta property="og:image" content=""/>
    	<meta property="og:url" content=""/>
    	<meta property="og:site_name" content=""/>
    	<meta property="og:description" content=""/>
    	<meta name="twitter:title" content="" />
    	<meta name="twitter:image" content="" />
    	<meta name="twitter:url" content="" />
    	<meta name="twitter:card" content="" />

    	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
    	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400" rel="stylesheet">

    	<!-- Animate.css -->
    	<link rel="stylesheet" href="/static/css/animate.css">
    	<!-- Icomoon Icon Fonts-->
    	<link rel="stylesheet" href="/static/css/icomoon.css">
    	<!-- Bootstrap  -->
    	<link rel="stylesheet" href="/static/css/bootstrap.css">

    	<!-- Magnific Popup -->
    	<link rel="stylesheet" href="/static/css/magnific-popup.css">

    	<!-- Owl Carousel  -->
    	<link rel="stylesheet" href="/static/css/owl.carousel.min.css">
    	<link rel="stylesheet" href="/static/css/owl.theme.default.min.css">

    	<!-- Flexslider  -->
    	<link rel="stylesheet" href="/static/css/flexslider.css">

      <link rel="stylesheet" href="/static/css/user_dropdown.css">

    	<!-- Pricing -->
    	<link rel="stylesheet" href="/static/css/pricing.css">

    	<!-- Theme style  -->
    	<link rel="stylesheet" href="/static/css/style.css">
    	<link rel="stylesheet" href="/static/css/login.css">
    	<link rel="stylesheet" href="/static/css/courses.css">

    	<!-- Modernizr JS -->
    	<script src="/static/js/modernizr-2.6.2.min.js"></script>
    	<script>
    	// Get the modal
    	var modal = document.getElementById('id01');

    	// When the user clicks anywhere outside of the modal, close it
    	window.onclick = function(event) {
    	    if (event.target == modal) {
    	        modal.style.display = "none";
    	    }
    	}
    	</script>
    	<!-- FOR IE9 below -->
    	<!--[if lt IE 9]>
    	<script src="/static/js/respond.min.js"></script>
    	<![endif]-->

    	</head>
    	<body>


    	<div class="fh5co-loader"></div>

    	<div id="page">
    	<nav class="fh5co-nav" role="navigation">
    		<div class="top-menu">
    			<div class="container">
    				<div class="row">
    					<div class="col-xs-2">
                            <img src="/static/images/logo_techedu.png" alt="logo_techedu" height="45 px">
    					</div>
    					<div class="col-xs-10 text-right menu-1">
    						<ul>
    							<li class="active"><a href="cursos">Cursos</a></li>
                  <div class="dropdown">
                    <img src="https://www.clker.com/cliparts/5/9/4/c/12198090531909861341man%20silhouette.svg.med.png" alt="logo_techedu" height="45 px">
    							  <span>Ola `+ prop.user +`</span>
    							  <div class="dropdown-content">
    									<a href="#home">Editar dados</a>
    	                <a href="#about">Certificado</a>
    	                <a href="#contact">Sair</a>
    							  </div>
    							</div>
    						</ul>
    					</div>
    				</div>

    			</div>
    		</div>
    	</nav>
    		<div id="flexContent">
          `+ coursesFormater(prop).join('') + `
    	</div>

      <div  style="position: relative; width: 600px; height: 800px; z-index=-1">
				<div class="col-md-12 text-center">
					<p><small class="block"></small></p>
				</div>
			</div>

		</div>
	</footer>
	<p><small style="position:fixed;bottom:0;width:100%;display:block;">TechEdu&reg;, 2017. Todos os direitos reservados.</small></p>
	</div>

    	<div class="gototop js-top">
    		<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
    	</div>

    	<!-- jQuery -->
    	<script src="/static/js/jquery.min.js"></script>
    	<!-- jQuery Easing -->
    	<script src="/static/js/jquery.easing.1.3.js"></script>
    	<!-- Bootstrap -->
    	<script src="/static/js/bootstrap.min.js"></script>
    	<!-- Waypoints -->
    	<script src="/static/js/jquery.waypoints.min.js"></script>
    	<!-- Stellar Parallax -->
    	<script src="/static/js/jquery.stellar.min.js"></script>
    	<!-- Carousel -->
    	<script src="/static/js/owl.carousel.min.js"></script>
    	<!-- Flexslider -->
    	<script src="/static/js/jquery.flexslider-min.js"></script>
    	<!-- countTo -->
    	<script src="/static/js/jquery.countTo.js"></script>
    	<!-- Magnific Popup -->
    	<script src="/static/js/jquery.magnific-popup.min.js"></script>
    	<script src="/static/js/magnific-popup-options.js"></script>
    	<!-- Count Down -->
    	<script src="/static/js/simplyCountdown.js"></script>
    	<!-- Main -->
    	<script src="/static/js/main.js"></script>
    	<script>
        var d = new Date(new Date().getTime() + 1000 * 120 * 120 * 2000);

        // default example
        simplyCountdown('.simply-countdown-one', {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate()
        });

        //jQuery example
        $('#simply-countdown-losange').simplyCountdown({
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate(),
            enableUtc: false
        });
    	</script>
    	</body>
    </html>
  `)
}
