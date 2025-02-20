document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-btn');

    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseId = button.parentElement.getAttribute('data-course-id');
            alert(`You have enrolled in Course ID: ${courseId}`);
        });
    });
});
