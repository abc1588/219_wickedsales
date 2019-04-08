export function formatMoney(pennies) {
    pennies = parseFloat(pennies);

    if (isNaN(pennies)){
        // throw new Error('Invalid data passed to formatMoney');
        return 'TBA';
    }

    const dollars = (pennies / 100).toFixed(2);

    return `$${dollars}`;
}
