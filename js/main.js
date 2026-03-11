async function loadHeader() {
    // Fetch the header file (using absolute path /components/)
    const response = await fetch('/components/header.html');
    const data = await response.text();
    document.getElementById('header-container').innerHTML = data;
    
    // Start your clock after header loads
    startClock(); 
}

function startClock() {
    const update = () => {
        const now = new Date();
        const clockEl = document.getElementById('clock');
        const dateEl = document.getElementById('date');
        const tzEl = document.getElementById('tz-suffix');
        const nodeEl = document.getElementById('node-status');

        if(clockEl) clockEl.innerText = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        if(dateEl) dateEl.innerText = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
        if(tzEl) tzEl.innerText = now.toLocaleTimeString('en-IN', {timeZoneName:'short'}).split(' ').pop();
        if(nodeEl) nodeEl.innerText = `${Intl.DateTimeFormat().resolvedOptions().timeZone} NODE ACTIVE`;
    };
    setInterval(update, 1000);
    update();
}

window.onload = loadHeader;