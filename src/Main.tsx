
import React, { useRef, useState } from 'react'
import { BsCloudArrowUp, BsCloudArrowDown, BsFileEarmarkBinary } from 'react-icons/bs'
import { RiDeleteBin6Line } from "react-icons/ri";
type Props = {
    user: string,
}
const Main = () => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [source, setSource] = useState("");
    const [inputField, setInputField] = useState({
        bucketName: "",
        downloadKey: "",
        deleteKey: "",
        previewKey: ""
    });
    const [file, setFile] = useState<File | null>(null);

    function handelFileInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const {files} = e.target;
        if(files && files.length){
            const file = files.item(0);
            if(file){
                setSource(URL.createObjectURL(file));
                setFile(file);                
            }
        }
        
    }

    function handelInputChange(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.name){
            setInputField({
                ...inputField,
                [e.target.name]: e.target.value
            })
        }        
        
    }
    return (


        <div className="mainPage">

            <div className="container">
            <div className="profile-div">
                <img className="profile-img" src="/images/profileImg.png"/>
                
            </div>
            <img src="/images/Screenshot 2022-05-25 at 3.57.04 PM.png"/>
            <h1>do.fileManager</h1>
            
            <div className="input-div">
                <form>              
                    <div className="inputRow ">
                        <BsCloudArrowUp className="mpIcon" />
                        <div className="upload-div">
                            <input 
                                className="upload-path"
                                type="text"
                                onChange={handelInputChange}
                                placeholder="Enter Bucket Name"
                                name="bucketName"
                                value={inputField.bucketName}
                            />
                            <button 
                                className="browser"
                                type="button"
                                onClick={()=>{
                                    fileInputRef.current?.click()
                                }}
                                >
                                    <span>Choose File</span>
                            </button>
                            <input
                                className="upload-file"
                                type="file"
                                accept="image/*"
                                onChange={handelFileInputChange}
                                ref={fileInputRef}
                            />
                        </div>
                        <button type="button"><span>Upload</span></button>
                    </div>
                    <div className="inputRow">
                        <BsCloudArrowDown className="mpIcon" />
                        <input 
                            type="text"
                            onChange={handelInputChange}
                            placeholder="Enter File Key"
                            name="downloadKey"
                            value={inputField.downloadKey}
                        />
                        <button type="button"><span>Download</span></button>
                    </div>
                    <div className="inputRow">
                        <RiDeleteBin6Line className="mpIcon" />
                        <input 
                            type="text"
                            onChange={handelInputChange}
                            placeholder="Enter File Key"
                            name="deleteKey"
                            value={inputField.deleteKey}
                        />
                        <button type="button"><span>Delete</span></button>
                    </div>
                    <div className="inputRow">
                        <BsFileEarmarkBinary className="mpIcon" />
                        <input 
                            type="text"
                            onChange={handelInputChange}
                            placeholder="Enter File Key"
                            name="previewKey"
                            value={inputField.previewKey}
                        />
                        <button type="button"><span>Preview</span></button>
                    </div>
                </form>
            </div>
           </div> 
         
        </div>
        
      )
}

export default Main;
