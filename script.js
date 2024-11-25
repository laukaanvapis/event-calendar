const events = [
  { date: '2024-12-03 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2024-12-07 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2024-12-12 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2024-12-14 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2024-12-15 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-02-04 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: '' },
];

const eventList = document.getElementById('eventList');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const eventsPerPage = 5;
let currentPage = 0;

function renderEvents() {
  const now = new Date();
  const filteredEvents = events
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const startIndex = currentPage * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  eventList.innerHTML = '';
  paginatedEvents.forEach(event => {
    const eventItem = document.createElement('li');
    eventItem.className = 'event-item';

    if (event.url) {
      eventItem.addEventListener('click', () => {
        window.open(event.url, '_blank');
      });
    }

    const eventDate = document.createElement('div');
    eventDate.className = 'event-date';
    eventDate.textContent = new Date(event.date).toLocaleString('fi-FI', {
      weekday: 'short',
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).replace(',', '');

    const eventTitle = document.createElement('div');
    eventTitle.className = 'event-title';
    eventTitle.textContent = event.title;

    const eventLocation = document.createElement('div');
    eventLocation.className = 'event-location';
    eventLocation.textContent = event.location;

    eventItem.append(eventDate, eventTitle, eventLocation);
    eventList.appendChild(eventItem);
  });

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = endIndex >= filteredEvents.length;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    renderEvents();
  }
});

nextBtn.addEventListener('click', () => {
  currentPage++;
  renderEvents();
});

renderEvents();
