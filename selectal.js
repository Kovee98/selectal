var Selectal = function(selectStr) {
    // Create the necessary elements and structure
    var select = document.querySelector(selectStr);
    var options = select.querySelectorAll('option');
    var wrapper = document.createElement('div');
    wrapper.className = "wrapper";
    document.querySelector('body').appendChild(wrapper);

    this.selectGroup = document.createElement('div');
    this.selectGroup.className = "selectal-group";
    this.selectGroup.id = select.id;
    wrapper.appendChild(selectGroup);

    this.selectBtn = document.createElement('div');
    this.selectBtn.className = "selectal-btn";

    this.selectedItem = document.createElement('p');
    this.selectedItem.id = "selectal-selected-item";
    this.selectedItem.innerHTML = options[0].innerHTML;
    this.selectBtn.appendChild(selectedItem);

    this.arrow = document.createElement('span');
    this.arrow.id = "arrow";
    this.arrow.className = "arrow-up";
    this.selectBtn.appendChild(arrow);
    this.selectGroup.appendChild(selectBtn);

    this.dropdown = document.createElement('div');
    this.dropdown.className = "selectal-dropdown";

    for(var i=0;i<options.length;i++) {
        var option = document.createElement('p');
        option.className = "selectal-dropdown-option";
        option.id = options[i].value;
        option.innerHTML = options[i].innerHTML;
        this.dropdown.appendChild(option);
    }
    this.selectGroup.appendChild(dropdown);

    var selectId = select.id;
    select.remove();
    this.input = document.createElement('input');
    this.input.type = "hidden";
    this.input.value = options[0].id;
    this.selectGroup.appendChild(input);

    addEventListeners();
}

function addEventListeners() {
    var options = document.querySelectorAll('.selectal-dropdown-option');
    document.querySelector('.selectal-btn').addEventListener('click', function() {
        var dropdown = this.parentNode.querySelector('.selectal-dropdown');
        toggleDropdown(dropdown, this.parentNode);
    });

    for(var i=0;i<options.length;i++) {
        options[i].addEventListener('click', function() {
            var dropdown = this.parentNode;
            var selectGroup = dropdown.parentNode;
            var input = selectGroup.querySelector('input');
            var selectBtn = selectGroup.querySelector('.selectal-btn');
            var text = this.innerHTML;
            var selectedText = this.parentNode.parentNode.querySelector('#selectal-selected-item');
            selectedText.innerHTML = text;
            input.value = this.id;
            toggleDropdown(dropdown, selectGroup);
        });
    }
}

function toggleDropdown(dropdown, selectGroup) {
    var dropdown = this.dropdown | dropdown;
    var selectGroup = this.selectGroup | selectGroup;
    var arrow = selectGroup.querySelector('#arrow');
    var selectBtn = selectGroup.querySelector('.selectal-btn');
    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
        selectBtn.classList.add("no-bottom-radius");
        arrow.classList.remove("arrow-down");
        arrow.classList.add("arrow-up");
    } else {
        dropdown.classList.add("hidden");
        selectBtn.classList.remove("no-bottom-radius");
        arrow.classList.remove("arrow-up");
        arrow.classList.add("arrow-down");
    }
}

Selectal.prototype.toggleDropdown = toggleDropdown;