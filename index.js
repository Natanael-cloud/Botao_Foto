const captureBtn = document.getElementById('captureBtn');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');

// Função para acessar a câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Erro ao acessar a câmera: ", err);
    });

// Capturar a imagem quando o botão for clicado
captureBtn.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Desenhar o vídeo no canvas (capturar imagem)
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Converter para URL de imagem
    const imageUrl = canvas.toDataURL('image/png');

    // Exibir a imagem capturada no elemento <img>
    photo.src = imageUrl;
    photo.style.display = 'block';



});