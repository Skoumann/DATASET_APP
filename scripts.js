let currentSlide = 0;
let filteredDatasets = [];

// Variables for tracking dataset viewing duration
let currentDataset = null;
let datasetStartTime = null;

// Helper function to get URL parameters
function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Apply the current filter based on URL parameters
function applyFilter() {
    const filterParam = getURLParameter('filter') || 'all';
    if (filterParam === 'all') {
        filteredDatasets = datasets.filter(d => d.type === 'p3' || d.type === 'p5' || d.type === 'PAS');
    } else if (filterParam === 'p3') {
        filteredDatasets = datasets.filter(d => d.type === 'p3');
    } else if (filterParam === 'p5') {
        filteredDatasets = datasets.filter(d => d.type === 'p5');
    } else if (filterParam === 'PAS') {
        filteredDatasets = datasets.filter(d => d.type === 'PAS');
    } else if (filterParam === 'toolbox') {
        filteredDatasets = datasets.filter(d => d.type === 'toolbox');
    } else if (filterParam === 'her') {
        filteredDatasets = datasets.filter(d => d.type === 'her');
    } else if (filterParam === 'sec') {
        filteredDatasets = datasets.filter(d => d.type === 'sec');
    } else if (filterParam === 'hidden') {
        filteredDatasets = datasets.filter(d => d.type === 'hidden');
    } else {
        filteredDatasets = datasets.filter(d => d.type === 'p3' || d.type === 'p5' || d.type === 'PAS'); // Default to P3 and P5
    }
}

// Populate the dropdown menu dynamically
function populateDropdown() {
    const list = document.getElementById('dataset-list');
    list.innerHTML = '';
    filteredDatasets.forEach((data, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#" data-index="${index}">${data.headline}</a>`;
        list.appendChild(li);
    });

    // Attach event listeners to dropdown links
    document.querySelectorAll('#dataset-list a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const index = parseInt(event.target.getAttribute('data-index'), 10);
            selectDataset(index);
        });
    });
}

// Update the iframe content based on the current dataset
function updateFullScreenContent() {
    if (filteredDatasets.length === 0) return;

    const dataset = filteredDatasets[currentSlide];
    const iframe = document.getElementById('fullscreen-iframe');
    if (iframe) {
        iframe.src = dataset.src;
        // Apply margin if defined
        iframe.style.marginTop = dataset.iframeMarginTop || '0px';
    }

    // Update the URL to reflect the current dataset
    const params = new URLSearchParams(window.location.search);
    params.set('id', dataset.id);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
}

// Select a dataset and update the viewer
function selectDataset(index) {
    if (currentDataset) {
        const duration = Date.now() - datasetStartTime;
        if (typeof umami !== 'undefined' && typeof umami.track === 'function') {
            umami.track('Dataset Viewed Duration', {
                dataset: currentDataset,
                duration_ms: duration,
            });
        }
    }

    currentSlide = index;

    updateFullScreenContent();

    const dataset = filteredDatasets[currentSlide];
    const datasetHeadline = dataset.headline;

    if (typeof umami !== 'undefined' && typeof umami.track === 'function') {
        umami.track('Dataset Selected', { dataset: datasetHeadline });
    }

    currentDataset = datasetHeadline;
    datasetStartTime = Date.now();
}

function initializeViewer() {
    const idParam = getURLParameter('id');
    const showInfoParam = getURLParameter('info');

    if (idParam) {
        const datasetIndex = filteredDatasets.findIndex(d => d.id === idParam);
        if (datasetIndex !== -1) {
            currentSlide = datasetIndex;
        }
    }

    if (filteredDatasets.length > 0) {
        updateFullScreenContent();
    }

    // Open the modal if showInfo=true is in the URL
    if (showInfoParam === 'true') {
        openInfoModal();
    }
}

// Modal functions
function openInfoModal() {
    if (filteredDatasets.length === 0) return;

    const dataset = filteredDatasets[currentSlide];

    document.getElementById('modal-headline').innerText = dataset.headline;
    document.getElementById('modal-partner').innerText = dataset.info.partnerInfo;
    //document.getElementById('modal-flightHeight').innerText = dataset.info.flightHeight;
    //document.getElementById('modal-gsd').innerText = dataset.info.gsd;
    document.getElementById('modal-camera').innerText = dataset.info.camera;

    document.getElementById('modal-text').innerHTML = dataset.text;

    const downloadButton = document.getElementById('download-dataset');
    const caseStoryButton = document.getElementById('case-story');
    const modalVideo = document.getElementById('modal-video');

    // Handling optional fields like Speed
    const speedElement = document.getElementById('modal-speed').parentElement;
    if (dataset.info.speed && dataset.info.speed.trim() !== "") {
        document.getElementById('modal-speed').innerText = dataset.info.speed;
        speedElement.style.display = 'block';
    } else {
        speedElement.style.display = 'none';
    }

    const gsdWrapper = document.getElementById('modal-gsd-wrapper');
    if (dataset.info.gsd && dataset.info.gsd.trim() !== "") {
        document.getElementById('modal-gsd').innerText = dataset.info.gsd;
        gsdWrapper.style.display = 'block';
    } else {
        gsdWrapper.style.display = 'none';
    }

    const distanceWrapper = document.getElementById('modal-distance-wrapper');
    if (dataset.info.flightHeight && dataset.info.flightHeight.trim() !== "") {
        document.getElementById('modal-flightHeight').innerText = dataset.info.flightHeight;
        distanceWrapper.style.display = 'block';
    } else {
        distanceWrapper.style.display = 'none';
    }







    if (dataset.downloadUrl) {
        downloadButton.href = dataset.downloadUrl;
        downloadButton.style.display = 'inline-block';
    } else {
        downloadButton.style.display = 'none';
    }

    if (dataset.caseStoryUrl) {
        caseStoryButton.href = dataset.caseStoryUrl;
        caseStoryButton.style.display = 'inline-block';
    } else {
        caseStoryButton.style.display = 'none';
    }

    if (dataset.youtubeUrl) {
        modalVideo.src = dataset.youtubeUrl;
        modalVideo.style.display = 'block';
    } else {
        modalVideo.style.display = 'none';
    }

    const modal = document.getElementById('info-modal');
    modal.style.display = 'block';

    if (typeof umami !== 'undefined' && typeof umami.track === 'function') {
        umami.track('Info Button Clicked', { dataset: dataset.headline });
    }
}

function closeInfoModal() {
    const modal = document.getElementById('info-modal');
    modal.style.display = 'none';
    const modalVideo = document.getElementById('modal-video');
    modalVideo.src = ''; // Stop the video playback
}

// Close the modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('info-modal');
    if (modal.style.display === 'block' && !event.target.closest('.modal-content') && !event.target.closest('.info-button')) {
        closeInfoModal();
    }
});

// Attach event listener to the Info button
document.querySelector('.info-button').addEventListener('click', () => {
    openInfoModal();
});


document.addEventListener('DOMContentLoaded', () => {
    // Inject SVG logo
    fetch('assets/p1logo.svg')
        .then(response => response.text())
        .then(svgData => {
            const logoContainer = document.getElementById('logo-container');
            logoContainer.innerHTML = svgData;
            const svg = logoContainer.querySelector('svg');
            if (svg) svg.classList.add('logo');
        })
        .catch(err => console.error('Error loading SVG:', err));

    // Apply filter, populate dropdown, and initialize viewer
    applyFilter();
    populateDropdown();
    initializeViewer();

    const eButton = document.querySelector('.e-button');
    const eList = document.querySelector('.e-list');
    const overlay = document.getElementById('overlay');

    // Toggle dropdown on burger menu click
    eButton.addEventListener('click', (e) => {
        e.stopPropagation();
        eButton.classList.toggle('open');
        eList.style.display = eButton.classList.contains('open') ? 'block' : 'none';
        overlay.style.display = eButton.classList.contains('open') ? 'block' : 'none';
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (
            eButton.classList.contains('open') &&
            !event.target.closest('.e-button') &&
            !event.target.closest('.e-list')
        ) {
            eButton.classList.remove('open');
            eList.style.display = 'none';
            overlay.style.display = 'none';
        }
    });

    // Close modal and menu when clicking on overlay
    overlay.addEventListener('click', () => {
        const modal = document.getElementById('info-modal');
        if (modal.style.display === 'block') {
            closeInfoModal();
        }
        if (eButton.classList.contains('open')) {
            eButton.classList.remove('open');
            eList.style.display = 'none';
        }
        overlay.style.display = 'none';
    });

    // Close the modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('info-modal');
        if (modal.style.display === 'block' && !event.target.closest('.modal-content') && !event.target.closest('.info-button')) {
            closeInfoModal();
            overlay.style.display = 'none';
        }
    });
});



window.addEventListener('beforeunload', () => {
    if (currentDataset) {
        const duration = Date.now() - datasetStartTime;
        if (typeof umami !== 'undefined') {
            umami.track('Dataset Viewed Duration', {
                dataset: currentDataset,
                duration_ms: duration,
            });
        }
    }
});
