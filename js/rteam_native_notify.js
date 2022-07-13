// Rederiza uma notificaÃ§Ã£o por 5 segundos
var notifyTimeout,
notifyRemoveTimeout;

function produce_native_notify(msg, type = 'msg', time = 5000, callback = false) {
	// Reinicia as notificaÃ§Ãµes
	window.clearTimeout(notifyTimeout);
	window.clearTimeout(notifyRemoveTimeout);
	$('.shion_native_notify_system').remove();

	let textoContexto = '';
	let title = '';
	if ( type == 'msg' ) {
		title = 'mensagem';
	} else if ( type == 'alert' ) {
		title = 'alerta!';
	} else if ( type == 'error' ) {
		title = 'oops.. houve um erro';
	} else {
		title = 'sucesso!';
	}
	textoContexto += `
	<section class="shion_native_notify_system show ${type}">
		<header class="SNNS_header">
			${title}
		</header>
		<section class="SNNS_content">
			${msg}
		</section>
	</section>`;

	// Renderiza
	$('body').append(textoContexto);

	// Some com a mensagem
	notifyTimeout = setTimeout(() => {
		$('.shion_native_notify_system').removeClass('show').addClass('hide');
		notifyRemoveTimeout = setTimeout(() => {
			$('.shion_native_notify_system').remove();

			// Aqui vem o callback da funÃ§Ã£o
			if ( callback ) {
				callback();
			}
		}, 700);
	}, time);
}
