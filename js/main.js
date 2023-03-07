document.addEventListener("DOMContentLoaded", function () {
    //открытие мобильного меню
    document.querySelectorAll('.navbar__mb-btn-open-sidebar').forEach(function (mbMenuBtn) {
        mbMenuBtn.addEventListener('click', function () {
            document.querySelectorAll('.sidebar').forEach(function (sidebar) {
                sidebar.classList.toggle('sidebar__mb-open')
            })
        })
    });

    //закрытие мобильного меню
    document.querySelectorAll('.sidebar__mb-btn-close-sidebar').forEach(function (mbMenuBtn) {
        mbMenuBtn.addEventListener('click', function () {
            document.querySelectorAll('.sidebar').forEach(function (sidebar) {
                sidebar.classList.toggle('sidebar__mb-open')
            })
        })
    });

    //открытие меню филиалов
    document.querySelectorAll('.sidebar__current-filial').forEach(function (chooseFilialBtn) {
        chooseFilialBtn.addEventListener('click', function () {
            chooseFilialBtn.classList.toggle('sidebar__current-filial_dark');
            document.querySelectorAll('.choose-filial-arrow').forEach(function (filialsbtn) {
                filialsbtn.classList.toggle('sidebar__btn-show-choose-filial')
            });
            document.querySelectorAll('.sidebar__choose-filial').forEach(function (filialmenu) {
                filialmenu.classList.toggle('sidebar__choose-filial-show')
            })
        })
    })
});
