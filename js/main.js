$(document).ready(function () {

	// Slider
	if (window.location.href.indexOf('index') > -1) {
		$('.galeria').bxSlider({
			mode: 'fade',
			captions: false,
			slideWidth: 1200,
			responsive: true,
			pager: true
		});

	}

	// Posts
	if (window.location.href.indexOf('index') > -1) {
		var posts = [
			{
				title: 'Los nuevos procesadores de Intel y AMD son lanzados al mercado',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Intel y AMD han lanzado sus nuevos procesadores al mercado, los cuales ofrecen mejor rendimiento y eficiencia energética en comparación con sus predecesores. Los procesadores de Intel están diseñados para ofrecer un mejor rendimiento en aplicaciones de productividad, mientras que los de AMD se enfocan en aplicaciones de alta demanda gráfica.',
				url: 'https://www.elconfidencial.com/tecnologia/2021-05-31/intel-amd-nuevos-procesadores-mercado-rendimiento-eficiencia-energetica_3015789/'
			},
			{
				title: 'Google anuncia nuevas funciones para su asistente virtual',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Google ha anunciado nuevas funciones para su asistente virtual, como la posibilidad de realizar llamadas de emergencia y enviar mensajes de texto a contactos de confianza. También se ha mejorado la integración con otros dispositivos inteligentes para ofrecer una experiencia más completa y personalizada.',
				url: 'https://www.xataka.com/altavoces-google/google-assistant-nuevas-funciones-mayor-integracion-otros-dispositivos'
			},
			{
				title: 'Microsoft anuncia el lanzamiento de Windows 11',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Microsoft ha anunciado el lanzamiento de su nuevo sistema operativo, Windows 11, el cual promete una interfaz más intuitiva y moderna, así como mejoras en el rendimiento y la seguridad. También se ha mejorado la integración con dispositivos móviles y la nube, lo que permite una mayor flexibilidad y movilidad para los usuarios.',
				url: 'https://www.elmundo.es/tecnologia/2021/06/24/60d4b18421efa0b0158b4570.html'
			},
			{
				title: 'Elon Musk presenta el nuevo Tesla Model S Plaid',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Elon Musk ha presentado el nuevo Tesla Model S Plaid, el cual ofrece una velocidad máxima de más de 320 kilómetros por hora y una autonomía de hasta 840 kilómetros con una sola carga. También cuenta con nuevas funciones de asistencia al conductor y una pantalla táctil de 17 pulgadas para el entretenimiento.',
				url: 'https://www.tesla.com/es_ES/blog/model-s-plaid'
			},
			{
				title: 'Apple anuncia la nueva versión de su sistema operativo iOS 15',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Apple ha anunciado la nueva versión de su sistema operativo móvil, iOS 15, el cual incluye nuevas funciones de privacidad, mejoras en la mensajería y la aplicación de mapas, y una mayor integración con otros dispositivos de la marca. También se ha mejorado la experiencia de FaceTime y se ha añadido la función de Focus, que permite personalizar las notificaciones según la actividad que se esté realizando.',
				url: 'https://www.elconfidencial.com/tecnologia/2021-06-07/apple-ios-15-novedades-dispositivos_3061040/'
			},
			{
				title: 'El gigante tecnológico chino Huawei presenta nuevos dispositivos de gama alta',
				date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Huawei ha presentado una serie de nuevos dispositivos de gama alta, como el smartphone P50 y la tablet MatePad Pro, los cuales cuentan con características técnicas avanzadas y un diseño elegante. A pesar de los desafíos que ha enfrentado la compañía en el mercado internacional, sigue siendo una de las marcas líderes en tecnología en China.',
				url: 'https://www.expansion.com/empresas/tecnologia/2021/07/29/6102f404468aeb373f8b45d9.html'
			}
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post" role="article" aria-label="${item.title}">
					<h3>${item.title}</h3>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="${item.url}" class="button-more">Leer más</a>
				</article>
			`;

			$("#posts").append(post);
		});
	}


	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function () {
		theme.attr("href", "css/green.css");
		// poner el estado de pulsado en el botón
		$("#to-green").attr("aria-pressed", "true")
		// y hacer apareser el elemento span con el id to-green-button
		$("#to-green-button").show();
		// comprobar cual es el botón que está pulsado y ponerle el role de button y ocultar el mensaje y ponerle no pulsad
		$("#to-red-button").hide();
		$("#to-red").attr("aria-pressed", "false")
		$("#to-red").attr("role", "button")
		$("#to-blue-button").hide();
		$("#to-blue").attr("aria-pressed", "false")
		$("#to-blue").attr("role", "button")

	});

	$("#to-red").click(function () {
		theme.attr("href", "css/red.css");
		// poner el estado de pulsado en el botón y quitar el de anterior y ponerle el role de button nuevamente
		$("#to-red").attr("aria-pressed", "true")
		$("#to-green").attr("aria-pressed", "false")
		$("#to-green").attr("role", "button")
		$("#to-blue").attr("aria-pressed", "false")
		$("#to-blue").attr("role", "button")
		// y hacer apareser el elemento span con el id to-red-button y quitar el de anterior
		$("#to-red-button").show();
		$("#to-green-button").hide();
		$("#to-blue-button").hide();
	});

	$("#to-blue").click(function () {
		theme.attr("href", "css/blue.css");
		// poner el estado de pulsado en el botón y quitar el de anterior y ponerle el role de button nuevamente
		$("#to-blue").attr("aria-pressed", "true")
		$("#to-green").attr("aria-pressed", "false")
		$("#to-green").attr("role", "button")
		$("#to-red").attr("aria-pressed", "false")
		$("#to-red").attr("role", "button")
		// y hacer apareser el elemento span con el id to-blue-button y quitar el de anterior
		$("#to-blue-button").show();
		$("#to-green-button").hide();
		$("#to-red-button").hide();
	});

	// dependiendo de la página ponerle el aria-current de el enlace de la lista de navegación
	if (window.location.href.indexOf('index') > -1) {
		$("#index-link").attr("aria-current", "page");
	} else if (window.location.href.indexOf('about') > -1) {
		$("#about-link").attr("aria-current", "page");
	} else if (window.location.href.indexOf('reloj') > -1) {
		$("#reloj-link").attr("aria-current", "page");
	} else if (window.location.href.indexOf('contact') > -1) {
		$("#contact-link").attr("aria-current", "page");
	}

	// Scroll arriba de la web
	$('.subir').click(function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);
		// enfocar con el tiempo de la animación la parte más arriba de la página
		setTimeout(function () {
			$('#index-link').focus();
		}, 500);

		return false;
	});

	// Login falso

	$("#login form").submit(function () {
		var form_name = $("#form_name").val();
		var form_genero = $("#form_genero").val();

		localStorage.setItem("form_name", form_name);
		localStorage.setItem("form_genero", form_genero);

	});

	var form_name = localStorage.getItem("form_name");
	var form_genero = localStorage.getItem("form_genero");

	if (form_name != null && form_name != "undefined" || form_genero != null && form_genero != "undefined") {
		var about_parrafo = $("#about p");
		form_genero == "hombre" ? about_parrafo.html("<br><strong>Bienvenido, " + form_name + ".</strong> ") : about_parrafo.html("<br><strong>Bienvenida, " + form_name + ".</strong> ");

		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function () {
			localStorage.clear();
			location.reload();
		});

	}


	// Acordeon

	if (window.location.href.indexOf('about') > -1) {
		$("#acordeon").accordion();
	}


	// Reloj
	if (window.location.href.indexOf('reloj') > -1) {

		setInterval(function () {
			var reloj = moment().format("hh:mm:ss");
			$('#reloj').html(reloj);
			// condición ternaria para dar los buenos días buenas tardes o noches dependiendo de la hora en el aria-label
			var hora = moment().format("HH");
			var saludo = hora >= 6 && hora < 12 ? "Buenos días!" : hora >= 12 && hora < 20 ? "Buenas tardes!" : "Buenas noches!";
			$('#reloj').attr("aria-label", saludo + " son las " + reloj);
		}, 1000);

	}

	// Validación
	if (window.location.href.indexOf('contact') > -1) {

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		// meter los errores en el elemento con la clase error de la librería validate
		$.validate({
			lang: 'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true,
			validateOnBlur: true,
			onError: function () {
				$("#contact").attr("aria-invalid", "true");
			}
		});

	}

});
