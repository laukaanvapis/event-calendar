const events = [
{ date: '2026-01-06 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
{ date: '2026-01-10 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-01-17 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-01-18 18:00', title: 'Kristittyjen ykseyden rukoustilaisuus', location: 'Arwidssonintie 15-17, 41340 Laukaa', url: 'https://www.laukaankotikulma.com/toiminta/' },
{ date: '2026-01-20 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-01-22 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
{ date: '2026-01-24 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-01-31 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-02-01 11:00', title: 'SRK-päivä 1', location: 'Keskustie 9, 41340 Laukaa', url: '' },
{ date: '2026-02-03 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-02-07 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-02-13 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-02-14 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-02-15 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
{ date: '2026-02-17 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-02-19 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
{ date: '2026-02-21 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-02-28 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-03-03 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-03-07 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-03-13 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-03-14 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-03-15 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
{ date: '2026-03-17 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-03-19 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
{ date: '2026-03-21 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-03-28 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-03-29 11:00', title: 'SRK-päivä 2', location: 'Keskustie 9, 41340 Laukaa', url: '' },
{ date: '2026-03-31 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-04-03 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-04-10 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-04-11 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-04-14 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-04-16 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
{ date: '2026-04-18 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-04-25 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-04-26 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
{ date: '2026-04-28 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-05-02 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-05-08 18:00', title: 'Pelejä ja pannareita', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-05-09 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-05-12 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-05-16 15:00', title: 'Toivon Cafe', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/toivon-cafe/' },
{ date: '2026-05-21 18:00', title: 'Hengellisten laulujen ilta', location: 'Sarahovi, Laukaantie 6, 41340 Laukaa', url: '' },
{ date: '2026-05-23 18:00', title: 'Nuortenilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-05-24 16:00', title: 'Yhteysilta', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/yhteysilta/' },
{ date: '2026-05-26 09:30', title: 'Perhekerho', location: 'Keskustie 9, 41340 Laukaa', url: 'https://laukaanvapis.fi/perhekerho/' },
{ date: '2026-05-31 12:00', title: 'Yhteisöpäivä Kiponniemessä', location: 'Kiponniementie 84, 41940 Vesanka', url: 'https://laukaanvapis.fi/yhteisopaiva-kiponniemessa/' },
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







