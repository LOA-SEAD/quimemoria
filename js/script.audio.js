var som = (function () {

    var som = 'audio/som',
    efeitoDeSom;


    (function inicializar() {
        if (suportaAudioElement()) {

            if (suportaWav()) {
                efeitoDeSom = new Audio(som + '.wav');

            } else {
                efeitoDeSom = new Audio(som + '.mp3');
            }
			efeitoDeSom.loop = false;
        }
    } ());

    function suportaAudioElement() {
        return typeof document.createElement('audio').canPlayType !== 'undefined';
    }

    function suportaWav() {
        return new Audio().canPlayType('audio/wav') !== '';
    }

    return {

        tocar: function () {
            if (efeitoDeSom !== undefined)
                efeitoDeSom.play();
        },
	};
}());
