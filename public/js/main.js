$(document).ready(function () {
    $('.btn.btn-danger.delete-todo').on('click', function (e) {
        e.preventDefault();
        $target = $(e.target);
        const id = $target.attr('data-todoid');
        $.ajax({
            type: 'DELETE',
            url: '/todos/' + id,
            success: function (response) {
                // If delete was successful. 
                console.log(response);
                window.location.href = "/";
            },
            error: function (err) {
                // If delete failed. 
                console.error(err);
            }
        });
    });
});

function validateForm() {
    var nameInput = document.querySelector('input[name="taskName"]');
    if (nameInput.value.trim() === '') {
        alert('Please enter a valid task name');
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}