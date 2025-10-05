document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('formMessage').textContent = "Thank you for your inquiry! We'll get back to you soon.";
        this.reset();
    });

    document.querySelectorAll('.add-order-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const item = btn.getAttribute('data-item');
            const itemInput = document.getElementById('item');
            if (itemInput.value.trim() === "") {
                itemInput.value = item;
            } else {
                itemInput.value += ", " + item;
            }
            itemInput.focus();
        });
    });

    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const feedbackName = document.getElementById('feedback-name').value.trim();
            document.getElementById('feedbackMessage').textContent = 
                "Thank you for your feedback" + (feedbackName ? ", " + feedbackName : "") + "!";
            feedbackForm.reset();
        });
    }
});