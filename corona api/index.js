const countrySelect = document.getElementById('country-select');
const casesEl = document.getElementById('cases').querySelector('span');
const deathsEl = document.getElementById('deaths').querySelector('span');
const recoveredEl = document.getElementById('recovered').querySelector('span');
const loader = document.getElementById('loader');
const errorEl = document.getElementById('error');

const API_BASE = 'https://disease.sh/v3/covid-19';

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.classList.remove('hidden');
}

function hideError() {
  errorEl.classList.add('hidden');
}

function updateStats(data) {
  casesEl.textContent = data.cases.toLocaleString();
  deathsEl.textContent = data.deaths.toLocaleString();
  recoveredEl.textContent = data.recovered.toLocaleString();
}

async function fetchData(url) {
  showLoader();
  hideError();
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    updateStats(data);
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  }
}

async function populateCountries() {
  try {
    const response = await fetch(`${API_BASE}/countries`);
    const countries = await response.json();
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.country;
      option.textContent = country.country;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

countrySelect.addEventListener('change', () => {
  const country = countrySelect.value;
  if (country === 'all') {
    fetchData(`${API_BASE}/all`);
  } else {
    fetchData(`${API_BASE}/countries/${country}`);
  }
});

// Initial load
populateCountries();
fetchData(`${API_BASE}/all`);