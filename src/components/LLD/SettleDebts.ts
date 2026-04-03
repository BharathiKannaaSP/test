interface TransactionInterface {
	payer: string;
	amount: number;
	participants: string[];
}

function SettleDebts(transactions: TransactionInterface[]) {
	// Step 1 Calculate NET balance
	const balance: Record<string, number> = {};
	for (const { payer, amount, participants } of transactions) {
		const split = amount / participants.length;

		for (const person of participants) {
			balance[person] = (balance[person] || 0) - split;
		}

		balance[payer] += amount;
	}

	// Step 2 Separate Creditors and Debtors
	const debtors: [string, number][] = [];
	const creditors: [string, number][] = [];

	for (const person in balance) {
		if (balance[person] < 0) {
			debtors.push([person, -balance[person]]);
		} else if (balance[person] > 0) {
			creditors.push([person, balance[person]]);
		}
	}

	console.log(debtors, creditors);

	// Step 3 - Settle
	const result = [];

	while (debtors.length && creditors.length) {
		const [dName, dAmt] = debtors[0];
		const [cName, cAmt] = creditors[0];
		const amount = Math.min(dAmt, cAmt);
		result.push(`${dName} needs to pay ${cName} - ${amount.toFixed(2)}`);

		// updates balance
		debtors[0][1] -= amount;
		creditors[0][1] -= amount;

		// remove settled people
		if (debtors[0][1] === 0) debtors.shift();
		if (creditors[0][1] === 0) creditors.shift();
	}

	return result;
}

const transactions = [
	{
		payer: 'A',
		amount: 100,
		participants: ['A', 'B', 'C'],
	},
];

console.log(SettleDebts(transactions));
