const fileInfo = document.querySelector('#file-name');
const downloadBtn = document.querySelector('#download');
const fileNameInput = document .querySelector('#fetch-file');
const downloadContainer = document.querySelector('#dowload-container');
const loading = document.querySelector('#loading');
const videoContainer = document.querySelector('video-container');

document.querySelector('#file-upload').addEventListener("change",(e) =>{
    let file = e.target.files[0];
    if (file){
        let reader = new FileReader();
        reader.onload = async(event) =>{
            let blob = new window.Blob([new Uint8Array(event.target.result)],{
                type:"video/mp4",
            });
            let res = await fetch(`https://localhost:3000/upload`);
            let data = await res.json();
            fileInfo.innerText = "Uploading..."
            await fetch(data.url,{
                method: "PUT",
                body: blob,
            });
            fileInfo.innerText =" ";
            fileInfo.innerText = ` File Uploaded with name: ${data.name}`;
        };
        reader.readAsArrayBuffer(file);
    }
});
downloadBtn.addEventListener("click",async() =>{
    let fileName = fileNameInput.value;
    let res = await fetch(`https://localhost:3000/download?key=${fileName}`);
    let data = await res.json();
    videoContainer.innerHTML = `<video controls width="700"><source src = ${data.url} type ="video/mp4"></video>`;
    downloadContainer.innerHTML = `<a href = ${data.url} download>Download</a>`;
});