document.title = "Eric's Blog"
const jumpToYoutube = () => {
    location.href = "https://www.youtube.com"
}
document.onreadystatechange = () => {
    document.getElementById('youtube').onclick = jumpToYoutube
}

const bilibili = function() {
    console.log(this.jumpToYoutube)
    location.href = 'https://bilibili.com'
}