const questionBtns = document.querySelectorAll('.question-btn');

questionBtns.forEach(function (questionBtn) {
  questionBtn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle('show-txt');
  });
});
