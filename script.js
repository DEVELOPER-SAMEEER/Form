const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        date: document.getElementById('date').value,
        fullName: document.getElementById('name').value,
        fatherName: document.getElementById('fn').value,
        motherName: document.getElementById('mn').value,
        classBranch: document.getElementById('class').value,
        enrollmentNo: document.getElementById('enrl').value,
        address: document.getElementById('adrs').value,
        contactNo: document.getElementById('Contact').value,
        email: document.getElementById('email').value
    };
const hostIp=window.location.hostname;
    fetch('http://localhost/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(function (res) {
        if (!res.ok) {
            throw new Error('Error');
        }
        return res.json();
    })
    .then(function (data) {
        alert('Data successfully Saved');
        form.reset();
    })
    .catch(function (error) {
        console.error('Error:', error);
        alert(error);
    });
});

