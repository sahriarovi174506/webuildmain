/*
--------------------------------
Ajax Contact Form
--------------------------------
+ https://github.com/mehedidb/Ajax_Contact_Form
+ A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
+ Has a fallback in jQuery for browsers that do not support HTML5 form validation.
+ version 1.0.1
+ Copyright 2016 Mehedi Hasan Nahid
+ Licensed under the MIT license
+ https://github.com/mehedidb/Ajax_Contact_Form
*/

(function ($, window, document, undefined) {
  "use strict";

  var $form = $("#contact-form");

  $form.submit(function (e) {
    // remove the error class
    $(".form-group").removeClass("has-error");
    $(".help-block").remove();

    // get the form data
    var formData = {
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val(),
      phone: $('input[name="phone"]').val(),
      subject: $('input[name="subject"]').val(),
      message: $('textarea[name="message"]').val(),
    };

    // process the form
    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    })
      .done(function (data) {
        // handle errors
        if (!data.success) {
          if (data.errors.name) {
            $("#name").parent(".form-group").addClass("has-error");
            $("#name")
              .parent(".form-group")
              .append('<div class="help-block">' + data.errors.name + "</div>");
          }
          if (data.errors.email) {
            $("#email").parent(".form-group").addClass("has-error");
            $("#email")
              .parent(".form-group")
              .append(
                '<div class="help-block">' + data.errors.email + "</div>"
              );
          }

          if (data.errors.subject) {
            $("#subject").parent(".form-group").addClass("has-error");
            $("#subject")
              .parent(".form-group")
              .append(
                '<div class="help-block">' + data.errors.subject + "</div>"
              );
          }
          if (data.errors.subject) {
            $("#phone").parent(".form-group").addClass("has-error");
            $("#phone")
              .parent(".form-group")
              .append(
                '<div class="help-block">' + data.errors.subject + "</div>"
              );
          }
          if (data.errors.message) {
            $("#message").parent(".form-group").addClass("has-error");
            $("#message")
              .parent(".form-group")
              .append(
                '<div class="help-block">' + data.errors.message + "</div>"
              );
          }
        } else {
          // display success message
          $form.html(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
        }
      })
      .fail(function (data) {
        // for debug
        console.log(data);
      });

    e.preventDefault();
  });
})(jQuery, window, document);
