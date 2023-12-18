const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 2,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let btn = document.getElementById ('send');
  btn.onclick = function(event) {
     
    event.preventDefault();

    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let isAgree = document.getElementById('isAgree');
    let errors = false;

    if(name.value.trim () == ''){
      name.classList.add ('is-invalid');
      errors = true;
    } else {
      name.classList.remove('is-invalid');
    }

    if(phone.value.trim () == ''){
      phone.classList.add ('is-invalid');
      errors = true;
    } else {
      phone.classList.remove('is-invalid');
    }
    
    if (!isAgree.checked){
      document.getElementsByClassName('checkbox-field')[0].classList.add('text-danger');
      errors = true;
    } else { 
      document.getElementsByClassName('checkbox-field')[0].classList.remove('text-danger');
    }

    if(errors) {
      alert('Заполните все поля');
    } else {
      alert ("Ваша заявка успешно отправлена!");
      form.reset();
  }
  const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  alert('Media Query Matched!')
}

  }