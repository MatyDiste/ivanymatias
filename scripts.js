document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const invitationNumber = document.getElementById('invitation-number').value;

    fetch('invitations.json')
        .then(response => response.json())
        .then(data => {
            const invitation = data.find(inv => inv.number === invitationNumber);
            if (invitation) {
                let guestListHtml = '';
                invitation.guests.forEach((guest, index) => {
                    guestListHtml += `
                        <div>
                            <input type="checkbox" id="guest-${index}" name="guest-${index}" checked>
                            <label for="guest-${index}">${guest}</label>
                        </div>
                    `;
                });
                document.getElementById('guest-list').innerHTML = guestListHtml;
            } else {
                alert('Número de invitación no válido');
            }
        })
        .catch(error => console.error('Error:', error));
});
