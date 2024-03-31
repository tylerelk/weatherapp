export default class Card {
    constructor(now, forecast, selectedUnit, time) {
        this.now = now,
        this.forecast = forecast,
        this.selectedUnit = selectedUnit
        this.time = time;
    }

    renderToday() {
        const container = document.createElement('div');
        const date = document.createElement('h2');
        const icon = document.createElement('img');
        const condition = document.createElement('h3');
        const temp = document.createElement('p');
        const unit = document.createElement('p');

        container.classList.add('current-card');
        container.appendChild(date);
        container.appendChild(icon);
        container.appendChild(condition);
        container.appendChild(temp);
        container.appendChild(unit);

        unit.textContent = this.selectedUnit === 'farenheit' ? ' F°' : ' C°';

        date.textContent = new Date(this.time * 1000).toDateString();
        icon.src = this.now.icon;
        icon.style.transform = 'scale(2)'
        condition.textContent = this.now.condition;
        temp.textContent = this.selectedUnit === 'farenheit' ? this.now.farenheit : this.now.celsius;
        temp.style.display = 'inline';
        unit.style.display = 'inline';

        return container;
    }

    renderFuture() {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        function makeCard(date, icon, maxC, minC, maxF, minF, unit) {
            const container = document.createElement('div');
            const cardDate = document.createElement('h2');
            const cardIcon = document.createElement('img');
            const cardCondition = document.createElement('h3');
            const cardMax = document.createElement('p');
            const cardMin = document.createElement('p');
    
            container.classList.add('forecast-card');
            container.appendChild(cardDate);
            container.appendChild(cardIcon);
            container.appendChild(cardCondition);
            container.appendChild(cardMax);
            container.appendChild(cardMin);
    
            cardDate.textContent = date;
            cardIcon.src = icon;
            cardMax.textContent = unit === 'farenheit' ? maxF + ' F°' : maxC + ' C°';
            cardMin.textContent = unit === 'farenheit' ? minF + ' F°': minC + ' C°';
    
            return container
        }
        let futureCards = [];
        this.forecast.forEach(day => {
            let timestamp = day.date;
            let dateConvert = new Date(timestamp * 1000);
            let newCard = makeCard(days[dateConvert.getUTCDay()], day.icon, day.maxCelsius, day.minCelsius, day.maxFarenheit, day.minFarenheit, this.selectedUnit);
            futureCards.push(newCard);
        });
        return futureCards;
    }
}