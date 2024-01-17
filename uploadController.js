
const { BlobServiceClient } = require("@azure/storage-blob");
const connStr = "DefaultEndpointsProtocol=https;AccountName=surajdemostorage;AccountKey=618Y/k+tzaYtbnz8cfaM4lscEtAJ1rO4ByzgNGqcGUDuNyun/sC+Zfdpp8szOAWF797dQBb25ZbB+AStk/EbyA==;EndpointSuffix=core.windows.net";
const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);

const containerName = `mycontainer`;

const containerClient = blobServiceClient.getContainerClient(containerName);



exports.uploadController = async (req, res, next) => {
    try {
        try {
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }

            const blobName = `${Date.now()}.${(req.file.originalname).split('.').pop()}`;
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);

            await blockBlobClient.upload(req.file.buffer, req.file.size);

            return res.status(200).send('File uploaded successfully.');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }

    } catch (error) {
        console.log(error);
    }

}
