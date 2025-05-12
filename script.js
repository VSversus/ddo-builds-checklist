document.addEventListener('DOMContentLoaded', () => {
    const checklistItems = [
        'Strength',
        'Dexterity',
        'Constitution',
        'Intelligence',
        'Wisdom',
        'Charisma',
        'Armor Class',
        'Hit Points',
        'Spell Resistance',
        'Damage Reduction'
    ];

    const gridContainer = document.querySelector('.grid-container');

    checklistItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'checklist-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = item;

        const label = document.createElement('label');
        label.htmlFor = item;
        label.textContent = item;

        div.appendChild(checkbox);
        div.appendChild(label);
        gridContainer.appendChild(div);
    });
});
