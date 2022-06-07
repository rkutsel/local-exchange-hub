// const { async } = require("@firebase/util");
const uuid = require("uuid");
const {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const date = require("./helpers");

console.log(date.format_date(), uuid.v4());
const connectionStore = require("../config/connection-store");
const storage = getStorage();
const listRef = ref(storage, "/img"); //path = "img/bike-0000.png"

async function listFiles() {
  try {
    const resPath = await listAll(listRef);
    return resPath.items.map((itemRef) => {
      return itemRef; //itemRef._location.path_
    });
  } catch {
    (error) => {
      error;
    };
  }
}

async function getOneUrl(path) {
  try {
    return await getDownloadURL(ref(storage, path));
  } catch {
    (error) => {
      error;
    };
  }
}

async function getAllUrls() {
  try {
    const filePaths = await listFiles();
    return Promise.all(filePaths.map((path) => getOneUrl(path)));
  } catch {
    (error) => {
      error;
    };
  }
}

async function uploadFile(fileName, fileBuffer) {
  const storageRef = ref(
    storage,
    `${date.format_date()}_${uuid.v4()}.${fileName.split(".")[1]}`
  );
  const uploadTask = await uploadBytesResumable(storageRef, fileBuffer);
  const publicUrl = await getOneUrl(storageRef);
  return publicUrl;
}
// getAllUrls().then((el) => console.log(el));

module.exports = { getOneUrl, getAllUrls, uploadFile };
