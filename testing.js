const fs = require("fs");

// Step 1: Write to file
fs.writeFile("data.txt", "Hello Node.js File System!", (err) => {
  if (err) {
    console.log("Error writing file\n");
    return;
  }

  console.log("File written successfully: 'data.txt'\n");

  // Step 2: Read file
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file\n");
      return;
    }

    console.log("File content after write:");
    console.log(data);

    // Step 3: Append to file
    fs.appendFile("data.txt", "\nThis is appended text.", (err) => {
      if (err) {
        console.log("Error appending file\n");
        return;
      }

      console.log("Data appended successfully\n");

      // Step 4: Read again after append
      fs.readFile("data.txt", "utf8", (err, newData) => {
        if (err) {
          console.log("Error reading file after append\n");
          return;
        }

        console.log("File content after append:\n");
        console.log(newData);

        // Step 5: Rename file
        fs.rename("data.txt", "newdata.txt", (err) => {
          if (err) {
            console.log("Error renaming file\n");
            return;
          }

          console.log("File renamed successfully to 'newdata.txt'\n");

          // Step 6: Delete file
          fs.unlink("newdata.txt", (err) => {
            if (err) {
              console.log("Error deleting file\n");
            } else {
              console.log("File deleted successfully\n");
            }
          });
        });
      });
    });
  });
});
