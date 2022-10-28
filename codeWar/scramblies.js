function scramble(str1, str2){
	let pool = {};
	
	for (let i = 0; i < str1.length; i++) {
		const char = str1[i];		
		pool[char] = pool[char] || 0;		
		pool[char]++;		
	}
	
	for (let i = 0; i < str2.length; i++) {
		const char = str2[i];
		if (pool[char] === undefined) return false;
		if (--pool[char] < 0) return false;
	}
	return true;
}

console.log( scramble('gdohot', 'hoto') );
