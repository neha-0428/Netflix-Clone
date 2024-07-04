// document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq_question');

    questions.forEach(ques => {
        ques.addEventListener('click', () => {
            const plus = ques.querySelector('.plus');
            const answer = ques.nextElementSibling;

            
            if (answer && answer.classList.contains('faq_answer')) {
                if (answer.classList.contains('active')) {
                    const section = document.getElementById('section6')
                    // Close the clicked answer if it's already open
                    answer.classList.remove('active');
                    plus.classList.remove('rotate');
                    section.style.height = 'fit-content'
                    // section.style.height = '140vh'
                } else {
                    // Close all other answers and rotate plus signs
                    const allAnswers = document.querySelectorAll('.faq_answer');
                    const allPluses = document.querySelectorAll('.plus');
                    
                    allAnswers.forEach(ans => {
                        ans.classList.remove('active');
                        // section.style.height = '160vh'
                    });
                    
                    allPluses.forEach(p => {
                        p.classList.remove('rotate');
                    });
                    
                    const section = document.getElementById('section6')
                    // Open the clicked question's answer and rotate the plus sign
                    section.style.height = 'fit-content'
                    // section.style.height = '160vh'
                    answer.classList.add('active');
                    plus.classList.add('rotate');
                }
            }
        });
    });
// });
