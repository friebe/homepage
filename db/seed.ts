import { Guestbook, db } from 'astro:db';

export default async function seed() {
	await db
		.insert(Guestbook)
		.values([
			{
				id: 1,
				author: 'Astropolus',
				date: new Date('2022-12-13'),
				message: 'Hello'
			},
			{
				id: 2,
				author: 'Jan',
				message: 'Test'
			}
		]);
}

