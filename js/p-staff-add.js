const actualBtn = document.getElementById('f-photo');

const fileChosen = document.getElementById('f-photo-chosen');

actualBtn.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
});
