const events = [
const events = [
  { date: '2024-12-03 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2024-12-07 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2024-12-12 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2024-12-14 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2024-12-15 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-01-11 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-01-14 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-01-18 18:00', title: 'Kristittyjen ykseyden rukousilta', location: 'Keskustie 9, 41340 Laukaa', url: '' },
  { date: '2025-01-19 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-01-25 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-01-28 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-01-31 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-02-04 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-02-08 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-02-11 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-02-11 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-02-15 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-02-16 16:00', title: 'Jumalanpalvelus', location: 'Jyväskylän Vapaaseurakunta, Ahjokatu 16, 40320 Jyväskylä', url: '' },
  { date: '2025-02-18 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-02-20 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2025-02-22 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-02-25 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-02-25 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-03-04 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-03-08 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-03-11 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-03-11 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-03-14 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-03-15 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-03-16 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-03-18 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-03-20 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2025-03-22 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-03-25 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-03-25 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-04-01 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-04-05 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-04-08 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-04-08 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-04-11 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-04-15 18:00', title: 'Alfa', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/alfa/' },
  { date: '2025-04-18 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-04-22 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-04-24 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2025-04-27 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-05-03 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-05-06 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-05-09 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-05-17 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
  { date: '2025-05-20 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
  { date: '2025-05-22 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
  { date: '2025-05-25 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
  { date: '2025-06-01 16:00', title: 'Yhteisöpäivä Kiponniemessä', location: 'Kiponniemi, Laukaa', url: '' },
];

];

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
