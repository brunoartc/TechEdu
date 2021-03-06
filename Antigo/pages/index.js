var registrar = require('./register').register;


exports.main = function (prop) {


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

    	<!-- Pricing -->
    	<link rel="stylesheet" href="/static/css/pricing.css">

    	<!-- Theme style  -->
    	<link rel="stylesheet" href="/static/css/style.css">
    	<link rel="stylesheet" href="/static/css/login.css">

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
    	<div id="id01" class="modal">

    	  <form class="modal-content animate" action="login" method="post">
    	    <div class="imgcontainer">
    	      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    				<h2>Já é aluno?</h2>
    	      <h3>Faça seu login!</h3>
    	    </div>

    	    <div class="login-container">
    	      <label><b>Username</b></label>
    	      <input type="text" placeholder="Enter Username" name="usr" required>

    	      <label><b>Password</b></label>
    	      <input type="password" placeholder="Enter Password" name="pass" required>
    				<input type="checkbox" checked="checked"> Remember me
    				<span class="psw">Forgot <a href="#">password?</a></span>
    	      <button type="submit">Login</button>
    	    </div>
    		</form>
    	</div>

    		<!--REGISTRAR-SE-->
    		<div id="id02" class="modal-overflow">
    		  <form class="modal-content animate" action="registers" method="post">
    		    <div class="imgcontainer">
    		      <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
    					<h2>Já é aluno?</h2>
    		      <h3>Faça seu login!</h3>
    		    </div>

    		    <div class="login-container">
    					<label><b>Nome Completo</b></label>
    		      <input type="text" placeholder="Nome completo" name="name" required>
    					<label><b>Username</b></label>
    		      <input type="text" placeholder="Nome completo" name="user" required>
    					<label><b>Instituicao</b></label>
    		      `+ registrar(prop) +`
    					<label><b>Email</b></label>
    		      <input type="email" placeholder="Email" name="email" required>
    		      <label><b>Celular</b></label>
    		      <input type="text" placeholder="DDD + CELULAR" name="cel" required size="11" maxlength="11">
    		      <label><b>Password</b></label>
    		      <input type="password" placeholder="Enter Password" required>
    					<label><b>Confirm Password</b></label>
    		      <input type="password" placeholder="Enter Password" name="psw" required>
    					<input type="checkbox" checked="checked"> Remember me
    					<span class="psw">Forgot <a href="#">password?</a></span>
    		      <button type="submit">Login</button>
    		    </div>
    		  </form>
    		</div>

    	<div class="fh5co-loader"></div>

    	<div id="page">
    	<nav class="fh5co-nav" role="navigation">
    		<div class="top">
    			<div class="container">
    				<div class="row">
    					<div class="col-xs-12 text-right">
    						<p class="site">tech.edu</p>
    						<p class="num">(11) 99999-9999</p>
    						<ul class="fh5co-social">
    							<li><a href="https://www.facebook.com/projetotechedu" target="_blank"><i class="icon-facebook2"></i></a></li>
    							<li><a href="#"><i class="icon-twitter2"></i></a></li>
    							<li><a href="https://www.instagram.com/techedubr" target="_blank"><i class="icon-instagram"></i></a></li>
    							<li><a href="https://www.linkedin.com/company-beta/24775029/" target="_blank"><i class="icon-linkedin2"></i></a></li>
    						</ul>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="top-menu">
    			<div class="container">
    				<div class="row">
    					<div class="col-xs-2">
                            <img src="/static/images/logo_techedu.png" alt="logo_techedu" height="45 px">
    					</div>
    					<div class="col-xs-10 text-right menu-1">
    						<ul>
    							<li class="active"><a href="index.html">Home</a></li>
    							<li><a href="/teacher.html">Apoiadores</a></li>
    							<li><a href="/contato">Contato</a></li>
    							<li class="btn-cta"><a href="#" onclick="document.getElementById('id01').style.display='block'"><span>Login</span></a></li>
    							<li class="btn-cta"><a href="#" onclick="document.getElementById('id02').style.display='block'"><span>Registre-se</span></a></li>
    						</ul>
    					</div>
    				</div>

    			</div>
    		</div>
    	</nav>

    	<aside id="fh5co-hero">
    		<div class="flexslider">
    			<ul class="slides">
    		   	<li style="background-image: url(/static/images/estudantespostit.jpg);">
    		   		<div class="overlay-gradient"></div>
    		   		<div class="container">
    		   			<div class="row">
    			   			<div class="col-md-8 col-md-offset-2 text-center slider-text">
    			   				<div class="slider-text-inner">
    			   					<h1>Cursos inovadores para jovens do ensino médio</h1>
    									<h2>No TechEdu a educação do futuro é para todos</h2>
    									<p><a class="btn btn-primary btn-lg" href="#">Cadastre-se!</a></p>
    			   				</div>
    			   			</div>
    			   		</div>
    		   		</div>
    		   	</li>
    		   	<li style="background-image: url(/static/images/estudantes-maos.jpg);">
    		   		<div class="overlay-gradient"></div>
    		   		<div class="container">
    		   			<div class="row">
    			   			<div class="col-md-8 col-md-offset-2 text-center slider-text">
    			   				<div class="slider-text-inner">
    			   					<h1>Vamos te ensinar coisas novas, você está preparad@?</h1>
    									<!--<h2>Brought to you by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>-->
    									<p><a class="btn btn-primary btn-lg btn-learn" href="#">Cadastre-se!</a></p>
    			   				</div>
    			   			</div>
    			   		</div>
    		   		</div>
    		   	</li>
    		   	<li style="background-image: url(/static/images/ieipessoal.jpg);">
    		   		<div class="overlay-gradient"></div>
    		   		<div class="container">
    		   			<div class="row">
    			   			<div class="col-md-8 col-md-offset-2 text-center slider-text">
    			   				<div class="slider-text-inner">
    			   					<h1>Muita ação, através do conhecimento.</h1>
    									<p><a class="btn btn-primary btn-lg btn-learn" href="#">Cadastre-se!</a></p>
    			   				</div>
    			   			</div>
    			   		</div>
    		   		</div>
    		   	</li>
    		  	</ul>
    	  	</div>
    	</aside>

    	<div id="fh5co-about">
    		<div class="container">
    			<div class="col-md-6 animate-box">
    				<h2>Bem vind@ ao TechEdu!</h2>
    				<p>O Tech Edu nasceu em 2016 com a reunião de um grupo de alunos do Insper que acreditam no poder transformador da Educação e veem a Tecnologia como uma grande aliada. Na primeira edição do projeto, em 2016, o TechEdu fez parceria com o programa ISMART Online e contou com 50 alunos de diversas escolas públicas da cidade de São Paulo.</p>
                    <p>Após as aulas e instruções iniciais, os alunos conduziram projetos de intervenção em suas escolas/comunidades, tendo acesso ao Fab Lab Insper e aos monitores e instrutores TechEdu. Em 2017, o projeto ganhou proporções maiores e está pronto para ajudar cada vez mais alunos pelo Brasil.</p>
    			</div>
    			<div class="col-md-6">
    				<img class="img-responsive" src="/static/images/ieipessoal.jpg" alt="alunos_felizes">
    			</div>
    		</div>
    	</div>

    	<div id="fh5co-counter" class="fh5co-counters" style="background-image: url(images/img_bg_4.jpg);" data-stellar-background-ratio="0.5">
    		<div class="overlay"></div>
    		<div class="container">
    			<div class="row">
    				<div class="col-md-10 col-md-offset-1">
    					<div class="row">
    						<div class="col-md-3 col-sm-6 text-center animate-box">
    							<span class="icon"><i class="icon-world"></i></span>
    							<span class="fh5co-counter js-counter" data-from="0" data-to="506000" data-speed="5000" data-refresh-interval="50"></span>
    							<span class="fh5co-counter-label">Alunos do ensino médio na cidade de SP</span>
    						</div>
    						<div class="col-md-3 col-sm-6 text-center animate-box">
    							<span class="icon"><i class="icon-study"></i></span>
    							<span class="fh5co-counter js-counter" data-from="0" data-to="310" data-speed="5000" data-refresh-interval="50"></span>
    							<span class="fh5co-counter-label">Alunos que já passaram por aqui</span>
    						</div>
    						<div class="col-md-3 col-sm-6 text-center animate-box">
    							<span class="icon"><i class="icon-bulb"></i></span>
    							<span class="fh5co-counter js-counter" data-from="0" data-to="5" data-speed="5000" data-refresh-interval="50"></span>
    							<span class="fh5co-counter-label">Workshops feitos</span>
    						</div>
    						<div class="col-md-3 col-sm-6 text-center animate-box">
    							<span class="icon"><i class="icon-head"></i></span>
    							<span class="fh5co-counter js-counter" data-from="0" data-to="22" data-speed="5000" data-refresh-interval="50"></span>
    							<span class="fh5co-counter-label">Profissionais e voluntários envolvidos</span>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>

            <div id="fh5co-course-categories">
    		<div class="container">
    			<div class="row animate-box">
    				<div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
    					<h2>Nossos workshops</h2>
    					<p>Neles são apresentados alguns conceitos chaves e os alunos são instigados a desenvolver um projeto de intervenção usando os conceitos aprendidos. São fornecidas apostilas que auxiliam os alunos durante os Workshops. Alguns voluntários do TechEdu podem mentorear grupos durante o desenvolvimento do projeto, que pode durar até 6 meses.</p>
    				</div>
    			</div>
    			<div class="row">
    				<div class="col-md-3 col-sm-6 text-center animate-box">
    					<div class="services">
    						<span class="icon">
    							<i class="icon-shop"></i>
    						</span>
    						<div class="desc">
    							<h3><a href="#">Empreendedorismo</a></h3>
    							<p>Como transformar suas ideias em um plano de negócios, destacar suas vantagens competitivas, lidar com o mercado e definir suas estratégias.</p>
    						</div>
    					</div>
    				</div>
    				<div class="col-md-3 col-sm-6 text-center animate-box">
    					<div class="services">
    						<span class="icon">
    							<i class="icon-world"></i>
    						</span>
    						<div class="desc">
    							<h3><a href="#">Programação</a></h3>
    							<p>Desenvolvimento de certas habilidades como raciocínio lógico, matemático, causa e consequência.</p>
    						</div>
    					</div>
    				</div>
    				<div class="col-md-3 col-sm-6 text-center animate-box">
    					<div class="services">
    						<span class="icon">
    							<i class="icon-lightbulb"></i>
    						</span>
    						<div class="desc">
    							<h3><a href="#">Design Thinking</a></h3>
    							<p>Método para encontrar soluções inovadoras para os problemas, soluções criativas focadas nas necessidades reais.</p>
    						</div>
    					</div>
    				</div>
    				<div class="col-md-3 col-sm-6 text-center animate-box">
    					<div class="services">
    						<span class="icon">
    							<i class="icon-world"></i>
    						</span>
    						<div class="desc">
    							<h3><a href="#">Eletrônica</a></h3>
    							<p>Problemas são apresentados e juntamente com a programação, utliza-se a eletrônica para resolvê-los.</p>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div id="fh5co-testimonial" style="background-image: url(/static/images/school.jpg);">
    		<div class="overlay"></div>
    		<div class="container">
    			<div class="row animate-box">
    				<div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
    					<h2><span>Depoimentos</span></h2>
    				</div>
    			</div>
    			<div class="row">
    				<div class="col-md-10 col-md-offset-1">
    					<div class="row animate-box">
    						<div class="owl-carousel owl-carousel-fullwidth">
    							<div class="item">
    								<div class="testimony-slide active text-center">
    									<div class="user" style="background-image: url(/static/images/person1.jpg);"></div>
    									<span>Maria das Graças<br><small>Estudante</small></span>
    									<blockquote>
    										<p>&ldquo;O TechEdu mudou a forma como vejo a tecnologia! Achei que programar era para gênios, e depois dos workshops eu quero aprender a programar de verdade!&rdquo;</p>
    									</blockquote>
    								</div>
    							</div>
    							<div class="item">
    								<div class="testimony-slide active text-center">
    									<div class="user" style="background-image: url(/static/images/person2.jpg);"></div>
    									<span>José de Paula<br><small>Estudante</small></span>
    									<blockquote>
    										<p>&ldquo;O design thinking pode ser aplicado em qualquer área da minha vida, acho que é um bom começo para eu me organizar.&rdquo;</p>
    									</blockquote>
    								</div>
    							</div>
    							<div class="item">
    								<div class="testimony-slide active text-center">
    									<div class="user" style="background-image: url(/static/images/person3.jpg);"></div>
    									<span>Rita Guedes<br><small>Professora</small></span>
    									<blockquote>
    										<p>&ldquo;Com uma metodologia de fácil entendimento, o TechEdu é passado para o aluno, que se identifica e interessa pelo conteúdo rapidamente.&rdquo;</p>
    									</blockquote>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div id="fh5co-gallery" class="fh5co-bg-section">
    		<div class="row text-center">
    			<h2><span>Lá no Instagram</span></h2>
    		</div>
    		<div class="row">
    			<div class="col-md-3 col-padded">
    				<a href="#" class="gallery" style="background-image: url(/static/images/insta1.gif);"></a>
    			</div>
    			<div class="col-md-3 col-padded">
    				<a href="#" class="gallery" style="background-image: url(/static/images/insta2.gif);"></a>
    			</div>
    			<div class="col-md-3 col-padded">
    				<a href="#" class="gallery" style="background-image: url(/static/images/insta3.gif);"></a>
    			</div>
    			<div class="col-md-3 col-padded">
    				<a href="#" class="gallery" style="background-image: url(/static/images/insta4.gif);"></a>
    			</div>
    		</div>
    	</div>

    	<footer id="fh5co-footer" role="contentinfo" style="background-image: url(/static/images/img_bg_4.jpg);">
    		<div class="overlay"></div>
    		<div class="container">
    			<!--<div class="row row-pb-md">
    				<div class="col-md-3 fh5co-widget">
    					<h3>About Education</h3>
    					<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
    				</div>
    				<div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
    					<h3>Learning</h3>
    					<ul class="fh5co-footer-links">
    						<li><a href="#">Course</a></li>
    						<li><a href="#">Blog</a></li>
    						<li><a href="#">Contact</a></li>
    						<li><a href="#">Terms</a></li>
    						<li><a href="#">Meetups</a></li>
    					</ul>
    				</div>

    				<div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
    					<h3>Learn &amp; Grow</h3>
    					<ul class="fh5co-footer-links">
    						<li><a href="#">Blog</a></li>
    						<li><a href="#">Privacy</a></li>
    						<li><a href="#">Testimonials</a></li>
    						<li><a href="#">Handbook</a></li>
    						<li><a href="#">Held Desk</a></li>
    					</ul>
    				</div>

    				<div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
    					<h3>Engage us</h3>
    					<ul class="fh5co-footer-links">
    						<li><a href="#">Marketing</a></li>
    						<li><a href="#">Visual Assistant</a></li>
    						<li><a href="#">System Analysis</a></li>
    						<li><a href="#">Advertise</a></li>
    					</ul>
    				</div>

    				<div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1 fh5co-widget">
    					<h3>Legal</h3>
    					<ul class="fh5co-footer-links">
    						<li><a href="#">Find Designers</a></li>
    						<li><a href="#">Find Developers</a></li>
    						<li><a href="#">Teams</a></li>
    						<li><a href="#">Advertise</a></li>
    						<li><a href="#">API</a></li>
    					</ul>
    				</div>
    			</div>-->

    			<div class="row copyright">
    				<div class="col-md-12 text-center">
    					<p><small class="block">TechEdu&reg;, 2017. Todos os direitos reservados.</small></p>
    				</div>
    			</div>

    		</div>
    	</footer>
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
