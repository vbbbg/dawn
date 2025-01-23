class FilterDrawer extends HTMLElement {
  constructor() {
    super();
    this.drawer = document.getElementById('FilterDrawer');
    this.openButton = document.querySelector('.collection-header__filter-button');
    this.closeButton = this.querySelector('.filter-drawer__close');
    this.overlay = this.querySelector('.filter-drawer__overlay');
    this.applyButton = this.querySelector('.filter-drawer__apply');
    this.resetButton = this.querySelector('.filter-drawer__reset');
    this.form = document.getElementById('FilterForm');

    this.bindEvents();
  }

  bindEvents() {
    this.openButton?.addEventListener('click', this.open.bind(this));
    this.closeButton?.addEventListener('click', this.close.bind(this));
    this.overlay?.addEventListener('click', this.close.bind(this));
    this.applyButton?.addEventListener('click', this.applyFilters.bind(this));
    this.resetButton?.addEventListener('click', this.resetFilters.bind(this));
  }

  open() {
    this.drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  applyFilters() {
    if (this.form) {
      const formData = new FormData(this.form);
      const searchParams = new URLSearchParams(formData);
      const queryString = searchParams.toString();
      console.log(this.form, searchParams, queryString);
      window.location.search = queryString;
    }
    this.close();
  }

  resetFilters() {
    if (this.form) {
      const inputs = this.form.querySelectorAll(
        'input[type="checkbox"], input[type="radio"], input[type="number"], input[type="text"]',
      );
      inputs.forEach((input) => {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = false;
        } else {
          input.value = '';
        }
      });
      window.location.href = window.location.pathname;
    }
    this.close();
  }
}

customElements.define('filter-drawer', FilterDrawer);
