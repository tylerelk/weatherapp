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

        container.classList.add('current-card');
        container.appendChild(date);
        container.appendChild(icon);
        container.appendChild(condition);
        container.appendChild(temp);

        date.textContent = this.time;
        icon.src = this.now.icon;
        condition.textContent = this.now.condition;
        temp.textContent = this.selectedUnit === 'farenheit' ? this.now.farenheit : this.now.celsius;

        return container;
    }

    renderFuture() {
        function makeCard(date, icon, condition, maxC, minC, maxF, minF, unit) {
            const container = document.createElement('div');
            const cardDate = document.createElement('h2');
            const cardIcon = document.createElement('img');
            const cardCondition = document.createElement('h3');
            const cardMax = document.createElement('p');
            const cardMin = document.createElement('p');
    
            container.classList.add('current-card');
            container.appendChild(cardDate);
            container.appendChild(cardIcon);
            container.appendChild(cardCondition);
            container.appendChild(cardMax);
            container.appendChild(cardMin);
    
            cardDate.textContent = date;
            cardIcon.src = icon;
            cardCondition.textContent = condition;
            cardMax.textContent = unit === 'farenheit' ? maxF : maxC;
            cardMin.textContent = unit === 'farenheit' ? minF : minC;
    
            return container
        }
        let futureCards = [];
        this.forecast.forEach(day => {
            let newCard = makeCard(day.date, day.icon, day.condition, day.maxCelsius, day.minCelsius, day.maxFarenheit, day.minFarenheit, this.selectedUnit);
            futureCards.push(newCard);
        });
        return futureCards;
    }
}