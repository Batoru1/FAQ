/*DOM method*/
const questionBtns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

questionBtns.forEach(function (questionBtn) {
  questionBtn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    // Toggle the 'show-txt' class on the clicked question
    question.classList.toggle('show-txt');
    // Hide other questions that are not the clicked question
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-txt');
      }
    });
  });
});

/*method2 using selectors inside the element so the prev question disappears after new one is selected*/

// const questions = document.querySelectorAll('.question');

// questions.forEach(function (question) {
//   const btn = question /* for selecting all 3 questions*/
//     .querySelector('.question-btn');
//   btn.addEventListener('click', function () {
//     questions.forEach(function (e) {
//       if (e !== question) {
//         e.classList.remove('show-txt');
//       }
//     });

//     question.classList.toggle('show-txt');
//   });
// });
