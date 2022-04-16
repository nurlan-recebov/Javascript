let sekiller = document.querySelector('.sekiller');
const rev = [{
        id: 1,
        img: 'https://mixmag.com.tr/assets/uploads/images/_columns2/rihanna-june-19-1.jpg',
    }, {
        id: 2,
        img: 'https://lyricstranslate.com/files/styles/artist/public/4305fb42b7d9f5533ac9b8cb054c42f500-ariana-grande-album-review.rsquare.w700.jpg'
    },
    {
        id: 3,
        img: 'https://urbanislandz.com/wp-content/uploads/2021/11/Doja-Cat-4.jpeg'
    },
    {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgGG5MVlWArR1P6rJgSk9Sh4MgRt1WoR4Weyo6sOg3Ju2bJrslPUWPYcY22TH-y-bwjA&usqp=CAU'
    },
    {
        id: 5,
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/191125_Taylor_Swift_at_the_2019_American_Music_Awards.png'
    },
    {
        id: 6,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_JAxCv5aVII7IGGRffoSWyP7Imtxy1mS9Q&usqp=CAU'
    },
    {
        id: 7,
        img: 'https://www.nj.com/resizer/JNbajnJr8hAqKuLQAdQ4GiEecNk=/700x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/fbf6961699/width2048/9c3_halsey2.jpeg'
    },
    {
        id: 8,
        img: 'https://pbs.twimg.com/profile_images/1195093329475768320/ymlq6422_400x400.jpg'
    },
    {
        id: 9,
        img: 'https://yt3.ggpht.com/8s2hH6UfSKbED2-UUVgCALU5BXXxvnk2ueNzBaCU-exfeoC9X1OZzDa6uqzI4cOA3ZDqyXjIsg=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        id: 10,
        img: 'https://celebwell.com/wp-content/uploads/sites/2/2022/02/GettyImages-1202148173-crop.jpg?quality=82&strip=all'
    },


]

for (let i = 0; i < rev.length; i++) {
    const item = rev[i];
    let sekil = document.createElement('img')
    sekil.className = 'sekil'
    sekiller.appendChild(sekil)
    sekil.style.objectfit = 'cover'
    sekil.src = item.img;
    i = Math.floor(Math.random() * rev.length);
}