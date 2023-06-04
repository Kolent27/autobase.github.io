const buttons = document.querySelectorAll('#sort');
  const showAllButton = document.getElementById('show-all');
  const carList = document.getElementById('car-list').querySelectorAll('.card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedBrand = button.value.toLowerCase();

      carList.forEach(car => {
        const title = car.querySelector('.title').textContent.toLowerCase();
        car.style.display = title.includes(selectedBrand) ? 'block' : 'none';
      });
    });
  });

  showAllButton.addEventListener('click', () => {
    carList.forEach(car => {
      car.style.display = 'block';
    });
  });