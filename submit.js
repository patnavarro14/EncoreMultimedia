function SubmitFormData() {
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    $.post("submit.php", { first_name: first_name, last_name: last_name, email: email, phone: phone},
    function(data) {
	 $('#results').html(data);
	 $('#user_info')[0].reset();
    });
}
