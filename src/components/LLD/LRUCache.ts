class LRUCache {
	private capacity: number;
	private cache: Map<number, number>;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.cache = new Map<number, number>();
	}

	get(key: number): number {
		if (!this.cache.has(key)) return -1;

		const value = this.cache.get(key)!;

		this.cache.delete(key);
		this.cache.set(key, value);
		return value;
	}

	put(key: number, value: number) {
		if (this.cache.has(key)) {
			this.cache.delete(key);
		}
		this.cache.set(key, value);

		if (this.cache.size > this.capacity) {
			const lruKey = this.cache.keys().next().value!;
			console.log(lruKey, 'LRU KEY');
			this.cache.delete(lruKey);
		}
	}
}

const lru = new LRUCache(2);

lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(2));
lru.put(3, 3);
console.log(lru.get(2));
console.log(lru.get(1));
console.log(lru.get(3));
