import React, {useState} from 'react'
import S3 from 'react-aws-s3';

const upload = () => {
    const [file, setFile] = useState('')
    const config = {
        bucketName: 'parkour-parking-lot-resize',
        dirName: 'media', /* optional */
        region: 'ap-south-1',
        accessKeyId: 'AKIARH6O6H5P6JRVYNHU',
        secretAccessKey: 'EJDPqxuDuWbEbBmIFl3XI4fPe5TkSVKQvA+9R82j',
        s3Url: 'https:/your-custom-s3-url.com/', /* optional */
    }
    const ReactS3Client = new S3(config);
const newFileName = 'test-file';
const handleUpload =(event) => {
setFile(event.target.files[0])
}
const file1 = 'my'
console.log(file)
ReactS3Client
    .uploadFile(file, newFileName)
    .then(data => console.log(data))
    .catch(err => console.error(err)) 
    return (
        <div>   
        <h3>upload</h3>
        <input type='file' onChange={handleUpload} />
        <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
        </div>
    )
}

export default upload
