const now = new Date();
const currentMonth = now.toLocaleString('default', { month: 'long' }); // e.g., "December"
output.currentMonth = currentMonth;