document.addEventListener('DOMContentLoaded', () => {
  const vegToggle = document.getElementById('vegToggle');
  const nonVegToggle = document.getElementById('nonVegToggle');

  function filterMenu(activeToggle, siblingToggle) {
    // Swiggy behavior: Checking one clears the opposite filter state
    if (activeToggle.checked && siblingToggle) {
      siblingToggle.checked = false;
    }

    const vegChecked = vegToggle ? vegToggle.checked : false;
    const nonVegChecked = nonVegToggle ? nonVegToggle.checked : false;

    // 1. Process Individual Items
    const foodItems = document.querySelectorAll('.food-item');
    foodItems.forEach(item => {
      const isVeg = item.classList.contains('veg');
      const isNonVeg = item.classList.contains('nonveg');

      if (vegChecked) {
        item.style.setProperty('display', isVeg ? 'flex' : 'none', 'important');
      } else if (nonVegChecked) {
        item.style.setProperty('display', isNonVeg ? 'flex' : 'none', 'important');
      } else {
        item.style.setProperty('display', 'flex', 'important');
      }
    });

    // 2. Process Combo Deals Individually based on state rules
    const vegCombo = document.querySelector('.veg-combo');
    const nonVegCombo = document.querySelector('.nonveg-combo');

    if (vegCombo && nonVegCombo) {
      if (vegChecked) {
        vegCombo.style.setProperty('display', 'flex', 'important');
        nonVegCombo.style.setProperty('display', 'none', 'important');
      } else if (nonVegChecked) {
        vegCombo.style.setProperty('display', 'none', 'important');
        nonVegCombo.style.setProperty('display', 'flex', 'important');
      } else {
        vegCombo.style.setProperty('display', 'flex', 'important');
        nonVegCombo.style.setProperty('display', 'flex', 'important');
      }
    }

    // 3. Hide Empty Main Categories
    const sections = [
      { id: 'group-veg', check: vegChecked, fail: nonVegChecked },
      { id: 'group-nonveg', check: nonVegChecked, fail: vegChecked }
    ];

    sections.forEach(sec => {
      const groupEl = document.getElementById(sec.id);
      if (groupEl) {
        if (sec.fail) {
          groupEl.style.display = 'none';
        } else {
          groupEl.style.display = 'block';
        }
      }
    });
  }

  if (vegToggle && nonVegToggle) {
    vegToggle.addEventListener('change', () => filterMenu(vegToggle, nonVegToggle));
    nonVegToggle.addEventListener('change', () => filterMenu(nonVegToggle, vegToggle));
  }
});