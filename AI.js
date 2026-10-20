const urls = [
    "AI-1.html",
    "AI-2.html",
    "AI-3.html"
];

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function openPagesWithDelay(urlList) {
    for(const url of urlList) {
        window.open(url, 'page_delay');
        await delay(300);
    }
}
openPagesWithDelay(urls);