const events = [
  { date: '2025-08-17 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-08-23 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-08-30 10:00', title: 'Vapiksen siivoustalkoot', location: 'Keskustie 9, 41340 Laukaa', url: '' },
  { date: '2025-09-02 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-09-06 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-09-11 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2025-09-12 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-09-14 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-09-16 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-09-20 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-09-30 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-10-04 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-10-09 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2025-10-12 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-10-14 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-10-18 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-10-24 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-10-28 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-11-01 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-11-06 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2025-11-07 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-11-11 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-11-15 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-11-23 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-11-25 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-11-29 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-12-04 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2025-12-05 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-12-09 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-12-13 15:00', title: 'Joulujuhla', location: 'Keskustie 9, 41340 Laukaa', url: '' },
  { date: '2025-12-21 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
];

const eventList = document.getElementById('eventList');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const eventsPerPage = 5;
let currentPage = 0;

function renderEvents() {
  const now = new Date();
  const bufferTime = 6 * 60 * 60 * 1000;
  const filteredEvents = events
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getTime() + bufferTime > now.getTime(); // Keep events visible for 6 hours after start
    })
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


