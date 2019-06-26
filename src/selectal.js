var Selectal = function(selectStr) {
    // Create the necessary elements and structure
    var select = document.querySelector(selectStr);
    var options = select.querySelectorAll('option');
    this.wrapper = document.createElement('div');
    this.wrapper.className = "selectal-wrapper";

    this.selectGroup = document.createElement('div');
    this.selectGroup.className = "selectal-group";
    this.selectGroup.id = select.id;
    this.wrapper.appendChild(this.selectGroup);

    this.selectBtn = document.createElement('div');
    this.selectBtn.className = "selectal-btn";

    this.selectedItem = document.createElement('p');
    this.selectedItem.id = "selectal-selected-item";
    this.selectedItem.innerHTML = options[0].innerHTML;
    this.selectBtn.appendChild(this.selectedItem);

    this.arrow = document.createElement('span');
    this.arrow.id = "arrow";
    this.arrow.className = "arrow-up";
    this.selectBtn.appendChild(this.arrow);
    this.selectGroup.appendChild(this.selectBtn);

    this.dropdown = document.createElement('div');
    this.dropdown.className = "selectal-dropdown";

    for(var i=0;i<options.length;i++) {
        var option = document.createElement('p');
        option.className = "selectal-dropdown-option";
        option.id = options[i].value;
        option.innerHTML = options[i].innerHTML;
        this.dropdown.appendChild(option);
    }
    this.selectGroup.appendChild(this.dropdown);

    var selectId = select.id;
    this.input = document.createElement('input');
    this.input.type = "hidden";
    this.input.value = options[0].id;
    this.selectGroup.appendChild(this.input);

    // Finally, append this to where the select element was and add the event listeners
    select.parentNode.insertBefore(this.wrapper, select.nextSibling);
    select.remove();
    addEventListeners(this);
}

function addEventListeners(selectal) {
    var options = document.querySelectorAll('.selectal-dropdown-option');
    document.querySelector('.selectal-btn').addEventListener('click', function() {
        var dropdown = this.parentNode.querySelector('.selectal-dropdown');
        selectal.toggleDropdown();
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
            selectal.toggleDropdown();
        });
    }
}

function toggleDropdown() {
    if(this.dropdown.classList.contains("hidden")) {
        this.dropdown.classList.remove("hidden");
        this.selectBtn.classList.add("no-bottom-radius");
        this.arrow.classList.remove("arrow-down");
        this.arrow.classList.add("arrow-up");
    } else {
        this.dropdown.classList.add("hidden");
        this.selectBtn.classList.remove("no-bottom-radius");
        this.arrow.classList.remove("arrow-up");
        this.arrow.classList.add("arrow-down");
    }
}

Selectal.prototype.toggleDropdown = toggleDropdown;

module.exports = Selectal;