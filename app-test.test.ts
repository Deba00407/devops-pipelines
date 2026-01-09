console.log('Testing.....')
for(let i = 0; i < 10; i++){
    console.log(`Test #${i} running....`);
    setTimeout(() => {
        console.log(`Test #${i} finished`);
    }, 3000);
}
console.log('Testing finished');