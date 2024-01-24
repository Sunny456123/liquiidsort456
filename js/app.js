/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 600
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 30,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);

function displayTranslatedMessage(messageKey) {
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value;

    const translations = {
        'uploadComplete': {
            'en': 'All uploads complete!  ',
            'es': '¡Subidas completas!  ',
            'fr': 'Toutes les téléchargements sont terminés!  ',
        },
        'uploadFailed': {
            'en': 'Upload failed: ',
            'es': 'Error al subir: ',
            'fr': 'Échec du téléchargement : ',
        },
        'deleteConfirmation': {
            'en': 'Are you sure you want to delete the selected photos?  ⁉️',
            'es': '¿Estás seguro de que quieres eliminar las fotos seleccionadas?  ⁉️',
            'fr': 'Êtes-vous sûr de vouloir supprimer les photos sélectionnées?  ⁉️',
        },
        'deleteSuccess': {
            'en': 'Selected photos deleted successfully! ',
            'es': '¡Fotos seleccionadas eliminadas con éxito! ',
            'fr': 'Photos sélectionnées supprimées avec succès! ',
        },
        'deleteError': {
            'en': 'Error deleting photos: ',
            'es': 'Error al eliminar fotos: ',
            'fr': 'Erreur lors de la suppression des photos : ',
        },
        'selectPhotosLabel': {
            'en': 'Select Photos:',
            'es': 'Seleccionar fotos:',
            'fr': 'Sélectionner des photos :',
        },
        'uploadButton': {
            'en': 'Upload',
            'es': 'Subir',
            'fr': 'Télécharger',
        },
    };

    const translatedMessage = translations[messageKey][selectedLanguage] || translations[messageKey]['en'];

    // Display the translated message using a custom dialog or any other method
    alert(translatedMessage);

    // Optionally, update the specific elements with translated text
    const translatedText = translations[messageKey][selectedLanguage];
    if (translatedText && document.getElementById(messageKey)) {
        document.getElementById(messageKey).innerText = translatedText;
    }
}



document.getElementById('translateButton').addEventListener('click', translatePage);

function translatePage() {
    const subscriptionKey = 'bc57360077d24293a0a52ca7c030a0c6';
    const languageSelect = document.getElementById('languageSelect');
    const targetLanguage = languageSelect.value;

    const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + targetLanguage;

    // Selectively translate text content of specific elements
    const elementsToTranslate = document.querySelectorAll('h1, button, label, input[type="file"]');

    const textArray = Array.from(elementsToTranslate).map(element => {
        return { 'Text': element.innerText };
    });

    fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Ocp-Apim-Subscription-Region': 'centralindia', // Replace with your Azure region code
            },
            body: JSON.stringify(textArray),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.length > 0) {
                data.forEach((translation, index) => {
                    const translatedText = translation.translations[0].text;
                    elementsToTranslate[index].innerText = translatedText;
                });
            } else {
                console.error('Invalid response format:', data);
            }
        })
        .catch(error => console.error('Error:', error));
}
