// script.js

// Register Pet functionality
document.getElementById('register-pet-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const petName = document.getElementById('pet-name').value;
    const microchipId = document.getElementById('microchip-id').value;
    const vaccinationRecords = document.getElementById('vaccination-records').files[0];
    // Send data to server-side script to register pet
    console.log(`Pet registered: ${petName} with microchip ID ${microchipId} and vaccination records ${vaccinationRecords}`);
});

// Weight Tracker functionality
document.getElementById('weight-tracker-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const petWeight = document.getElementById('pet-weight').value;
    // Send data to server-side script to track weight
    console.log(`Pet weight tracked: ${petWeight}`);
});

// Care Diary functionality
document.getElementById('care-diary-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const appointmentDate = document.getElementById('appointment-date').value;
    const vaccinationDetails = document.getElementById('vaccination-details').value;
    // Send data to server-side script to add to diary
    console.log(`Appointment added to diary: ${appointmentDate} with vaccination details ${vaccinationDetails}`);
});

// Veterinary Clinics functionality
fetch('https://example.com/api/vet-clinics')
    .then(response => response.json())
    .then(data => {
        const clinicList = document.getElementById('clinic-list');
        data.forEach(clinic => {
            const clinicListItem = document.createElement('li');
            clinicListItem.textContent = clinic.name;
            clinicList.appendChild(clinicListItem);
        });
    })
    .catch(error => console.error('Error fetching vet clinics:', error));