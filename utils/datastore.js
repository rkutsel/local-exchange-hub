const {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
} = require("firebase/storage");
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

getAllUrls().then((el) => console.log(el));

module.exports = { getOneUrl, getAllUrls };
